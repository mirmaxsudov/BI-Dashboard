"use client"

import { Pie, PieChart, Cell } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { region: "North America", users: 45, fill: "hsl(var(--chart-1))" },
  { region: "Europe", users: 30, fill: "hsl(var(--chart-2))" },
  { region: "Asia", users: 20, fill: "hsl(var(--chart-3))" },
  { region: "Others", users: 5, fill: "hsl(var(--chart-4))" },
]

const chartConfig = {
  users: {
    label: "Users %",
  },
} satisfies ChartConfig

export function GeographicChart() {
  return (
    <ChartContainer config={chartConfig}>
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={data}
          dataKey="users"
          nameKey="region"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}
