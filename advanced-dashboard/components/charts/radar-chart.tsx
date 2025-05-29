"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart as RechartsRadarChart, Tooltip } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { RadarMetricsType } from "@/types/overview/OverviewTypes"
import { fetchRadarMetrics } from "@/api/overview/overview.api"

// Map your backend fields to the chart config keys
const chartConfig = {
  currentValue: {
    label: "Current",
    color: "hsl(var(--chart-1))",
  },
  baselineValue: {
    label: "Baseline",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function RadarChart() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<RadarMetricsType[]>([])

  useEffect(() => {
    fetchRadarMetrics()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading…</div>

  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
      <RechartsRadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
      >
        {/* Custom tooltip pulled through your UI layer */}
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

        {/* Angle axis uses the `dimension` field */}
        <PolarAngleAxis dataKey="dimension" />
        <PolarGrid />

        {/* Radar for current values */}
        <Radar
          name={chartConfig.currentValue.label}
          dataKey="currentValue"
          stroke="var(--color-currentValue)"
          fill="var(--color-currentValue)"
          fillOpacity={0.3}
          strokeWidth={2}
        />

        {/* Radar for baseline values */}
        <Radar
          name={chartConfig.baselineValue.label}
          dataKey="baselineValue"
          stroke="var(--color-baselineValue)"
          fill="var(--color-baselineValue)"
          fillOpacity={0.1}
          strokeWidth={2}
        />
      </RechartsRadarChart>
    </ChartContainer>
  )
}