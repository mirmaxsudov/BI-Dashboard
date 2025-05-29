"use client"

import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts"
import {
  ChartContainer,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { TrafficSourcesType } from "@/types/analytics/AnalyticsTypes"
import { fetchTrafficSources } from "@/api/analytics/analytics.api"

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-1))",
  },
  sessions: {
    label: "Sessions",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function TrafficSourcesChart() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<TrafficSourcesType[]>([])

  useEffect(() => {
    fetchTrafficSources()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading…</div>

  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"     // ← horizontal bars
          margin={{ left: 80, right: 20, top: 20, bottom: 20 }}
        >
          <XAxis
            type="number"
            hide
            domain={[0, "dataMax"]}
          />

          <YAxis
            dataKey="sourceName"
            type="category"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tickFormatter={(v) => (typeof v === "string" ? v.slice(0, 10) : v)}
          />
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.05)" }}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Bar
            dataKey="visitors"
            fill="var(--color-visitors)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}