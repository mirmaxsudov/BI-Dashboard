"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { source: "Organic Search", visitors: 12500, sessions: 15200 },
  { source: "Direct", visitors: 8900, sessions: 10100 },
  { source: "Social Media", visitors: 6700, sessions: 8200 },
  { source: "Email", visitors: 4300, sessions: 5100 },
  { source: "Paid Search", visitors: 3200, sessions: 3800 },
  { source: "Referral", visitors: 2100, sessions: 2600 },
]

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
  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={data}
        layout="horizontal"
        margin={{
          left: 80,
        }}
      >
        <YAxis
          dataKey="source"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 10)}
        />
        <XAxis dataKey="visitors" type="number" hide />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Bar dataKey="visitors" layout="horizontal" fill="var(--color-visitors)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
