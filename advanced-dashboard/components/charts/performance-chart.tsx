"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { channel: "Email", performance: 85, target: 90 },
  { channel: "Social", performance: 72, target: 80 },
  { channel: "Search", performance: 94, target: 85 },
  { channel: "Direct", performance: 88, target: 85 },
  { channel: "Referral", performance: 76, target: 75 },
  { channel: "Display", performance: 65, target: 70 },
]

const chartConfig = {
  performance: {
    label: "Performance",
    color: "hsl(var(--chart-1))",
  },
  target: {
    label: "Target",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function PerformanceChart() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={data}>
        <XAxis
          dataKey="channel"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis hide />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
        <Bar dataKey="performance" fill="var(--color-performance)" radius={4} />
        <Bar dataKey="target" fill="var(--color-target)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
