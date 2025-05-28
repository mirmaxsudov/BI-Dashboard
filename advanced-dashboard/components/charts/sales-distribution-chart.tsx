"use client"

import { Pie, PieChart, Cell } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Electronics", value: 35, fill: "hsl(var(--chart-1))" },
  { name: "Clothing", value: 25, fill: "hsl(var(--chart-2))" },
  { name: "Books", value: 20, fill: "hsl(var(--chart-3))" },
  { name: "Home & Garden", value: 15, fill: "hsl(var(--chart-4))" },
  { name: "Sports", value: 5, fill: "hsl(var(--chart-5))" },
]

const chartConfig = {
  value: {
    label: "Sales %",
  },
} satisfies ChartConfig

export function SalesDistributionChart() {
  return (
    <ChartContainer config={chartConfig}>
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}
