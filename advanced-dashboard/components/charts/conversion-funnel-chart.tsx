"use client"

import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { ConversionFunnelType } from "@/types/analytics/AnalyticsTypes"
import { fetchConversionFunnel } from "@/api/analytics/analytics.api"

const chartConfig = {
  count: { label: "Count", color: "hsl(var(--chart-3))" },
} satisfies ChartConfig

export function ConversionFunnelChart() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<ConversionFunnelType[]>([])

  useEffect(() => {
    fetchConversionFunnel()
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
          layout="vertical"        // ← horizontal bars
          margin={{ left: 60, right: 20, top: 20, bottom: 20 }}
        >
          {/* Numeric axis */}
          <XAxis
            type="number"
            hide
            domain={[0, "dataMax"]}
          />

          {/* Category axis */}
          <YAxis
            dataKey="stageName"
            type="category"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
          />

          {/* Tooltip (using your UI wrapper) */}
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.05)" }}
            content={<ChartTooltipContent indicator="line" />}
          />

          {/* The bars */}
          <Bar
            dataKey="count"
            fill="var(--color-count)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
