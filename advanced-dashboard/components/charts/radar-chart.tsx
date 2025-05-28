"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart as RechartsRadarChart } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { subject: "Performance", A: 120, B: 110, fullMark: 150 },
  { subject: "Security", A: 98, B: 130, fullMark: 150 },
  { subject: "Usability", A: 86, B: 130, fullMark: 150 },
  { subject: "Reliability", A: 99, B: 100, fullMark: 150 },
  { subject: "Scalability", A: 85, B: 90, fullMark: 150 },
  { subject: "Efficiency", A: 65, B: 85, fullMark: 150 },
]

const chartConfig = {
  A: {
    label: "Current",
    color: "hsl(var(--chart-1))",
  },
  B: {
    label: "Target",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function RadarChart() {
  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
      <RechartsRadarChart data={data}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="subject" />
        <PolarGrid />
        <Radar dataKey="A" stroke="var(--color-A)" fill="var(--color-A)" fillOpacity={0.3} strokeWidth={2} />
        <Radar dataKey="B" stroke="var(--color-B)" fill="var(--color-B)" fillOpacity={0.1} strokeWidth={2} />
      </RechartsRadarChart>
    </ChartContainer>
  )
}
