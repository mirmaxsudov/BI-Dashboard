"use client"

import React, { useEffect, useState } from "react"
import {
  ResponsiveContainer,
  ScatterChart as RechartsScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { KpisType } from "@/types/overview/OverviewTypes"
import { fetchKpis } from "@/api/overview/overview.api"

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--chart-3))",
  },
  changePercent: {
    label: "Change %",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function ScatterChart() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<KpisType[]>([])

  useEffect(() => {
    fetchKpis()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading…</div>

  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsScatterChart
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <XAxis
            type="number"
            dataKey="value"
            name="Value"
          />
          <YAxis
            type="number"
            dataKey="changePercent"
            name="Change %"
            unit="%"
          />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            content={<ChartTooltipContent />}
          />
          <Scatter
            name="KPI"
            data={data}
            fill="hsl(var(--chart-3))"
          />
        </RechartsScatterChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}