"use client"

import React, { useEffect, useState } from 'react'
import { fetchHeatmap } from '@/api/overview/overview.api'
import { HeatMapType } from '@/types/overview/OverviewTypes'

// Map numeric dayOfWeek (1=Mon) to labels
const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const getColor = (value: number) => {
  const intensity = Math.min(value / 100, 1)
  return `hsl(220, 70%, ${90 - intensity * 40}%)`
}

export function HeatmapChart() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<HeatMapType[]>([])

  useEffect(() => {
    fetchHeatmap()
      .then((res) => setData(res))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading…</div>

  // Derive unique hours from data, sorted
  const hours = Array.from(
    new Set(data.map((d) => d.hourOfDay))
  ).sort((a, b) => a - b)
  const hourLabels = hours.map((h) => String(h).padStart(2, '0'))

  return (
    <div className="w-full h-[250px] overflow-auto">
      <div
        className="grid gap-1"
        style={{
          display: 'grid',
          gridTemplateColumns: `auto repeat(${hourLabels.length}, minmax(0, 1fr))`,
          height: '100%',
        }}
      >
        {/* top-left blank for day labels */}
        <div />
        {/* hour headers */}
        {hourLabels.map((label) => (
          <div
            key={label}
            className="text-xs text-center text-muted-foreground"
          >
            {label}:00
          </div>
        ))}

        {/* rows per day */}
        {dayLabels.map((day, idx) => (
          <React.Fragment key={day}>
            {/* day label cell */}
            <div className="text-xs font-semibold flex items-center">
              {day}
            </div>
            {/* data cells */}
            {hours.map((hour) => {
              const point = data.find(
                (d) => d.dayOfWeek === idx + 1 && d.hourOfDay === hour
              )
              const value = point?.activityCount ?? 0
              return (
                <div
                  key={`${day}-${hour}`}
                  className="aspect-square rounded-sm flex items-center justify-center text-xs font-medium"
                  style={{ backgroundColor: getColor(value) }}
                  title={`${day} ${hour}:00 - ${value} users`}
                >
                  {value}
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}