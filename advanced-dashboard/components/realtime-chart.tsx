"use client"

import { Line, LineChart, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { time: "00:00", active: 120 },
  { time: "04:00", active: 85 },
  { time: "08:00", active: 240 },
  { time: "12:00", active: 380 },
  { time: "16:00", active: 450 },
  { time: "20:00", active: 320 },
  { time: "24:00", active: 180 },
]

const chartConfig = {
  active: {
    label: "Active Users",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function RealtimeChart() {
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
        <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis hide />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="active"
          type="monotone"
          stroke="var(--color-active)"
          strokeWidth={3}
          dot={{
            fill: "var(--color-active)",
            strokeWidth: 2,
            r: 4,
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  )
}
