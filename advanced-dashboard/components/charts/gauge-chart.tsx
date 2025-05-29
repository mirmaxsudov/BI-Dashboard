"use client"

import { fetchGauge } from "@/api/overview/overview.api"
import { GaugeType } from "@/types/overview/OverviewTypes"
import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

export function GaugeChart() {
  const [loading, setLoading] = useState(true)
  const [gauge, setGauge] = useState<GaugeType | null>(null)

  useEffect(() => {
    fetchGauge()
      .then(data => setGauge(data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading || gauge === null) return;

  const used = gauge.value
  const available = 100 - used
  const chartData = [
    { name: "Used", value: used, color: "hsl(var(--chart-1))" },
    { name: "Available", value: available, color: "hsl(var(--muted))" },
  ]

  return (
    <div className="relative w-full h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
          <Pie
            data={chartData}
            cx="50%"
            cy="75%"
            startAngle={180}
            endAngle={0}
            innerRadius="60%"
            outerRadius="80%"
            dataKey="value"
            paddingAngle={2}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-[40px] inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold">{used}%</div>
          <div className="text-sm text-muted-foreground">Performance</div>
        </div>
      </div>
    </div>
  )
}