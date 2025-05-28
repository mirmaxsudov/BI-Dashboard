"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { stage: "Visitors", count: 10000, percentage: 100 },
  { stage: "Leads", count: 3500, percentage: 35 },
  { stage: "Prospects", count: 1200, percentage: 12 },
  { stage: "Customers", count: 320, percentage: 3.2 },
]

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function ConversionFunnelChart() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={data}
        layout="horizontal"
        margin={{
          left: 60,
        }}
      >
        <YAxis dataKey="stage" type="category" tickLine={false} tickMargin={10} axisLine={false} />
        <XAxis dataKey="count" type="number" hide />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
        <Bar dataKey="count" layout="horizontal" fill="var(--color-count)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
