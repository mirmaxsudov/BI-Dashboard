"use client"

import { Scatter, ScatterChart as RechartsScatterChart, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
  { x: 200, y: 350, z: 300 },
  { x: 180, y: 450, z: 600 },
  { x: 160, y: 380, z: 450 },
  { x: 190, y: 420, z: 550 },
]

const chartConfig = {
  x: {
    label: "Session Duration (min)",
  },
  y: {
    label: "Page Views",
  },
} satisfies ChartConfig

export function ScatterChart() {
  return (
    <ChartContainer config={chartConfig}>
      <RechartsScatterChart
        margin={{
          left: 20,
          right: 20,
        }}
      >
        <XAxis type="number" dataKey="x" name="Session Duration" unit="min" />
        <YAxis type="number" dataKey="y" name="Page Views" />
        <ChartTooltip cursor={{ strokeDasharray: "3 3" }} content={<ChartTooltipContent />} />
        <Scatter dataKey="z" fill="hsl(var(--chart-3))" />
      </RechartsScatterChart>
    </ChartContainer>
  )
}
