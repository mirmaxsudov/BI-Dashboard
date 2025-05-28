"use client"

import { Line, LineChart, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", users: 1000 },
  { month: "Feb", users: 1200 },
  { month: "Mar", users: 1100 },
  { month: "Apr", users: 1400 },
  { month: "May", users: 1600 },
  { month: "Jun", users: 1800 },
  { month: "Jul", users: 2100 },
  { month: "Aug", users: 2300 },
  { month: "Sep", users: 2200 },
  { month: "Oct", users: 2500 },
  { month: "Nov", users: 2700 },
  { month: "Dec", users: 2900 },
]

const chartConfig = {
  users: {
    label: "Users",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function UserGrowthChart() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis hide />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line dataKey="users" type="monotone" stroke="var(--color-users)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  )
}
