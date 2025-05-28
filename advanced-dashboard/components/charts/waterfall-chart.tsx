"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Starting Revenue", value: 10000, cumulative: 10000, type: "positive" },
  { name: "New Sales", value: 3000, cumulative: 13000, type: "positive" },
  { name: "Upsells", value: 1500, cumulative: 14500, type: "positive" },
  { name: "Churn", value: -2000, cumulative: 12500, type: "negative" },
  { name: "Refunds", value: -500, cumulative: 12000, type: "negative" },
  { name: "Final Revenue", value: 12000, cumulative: 12000, type: "total" },
]

const chartConfig = {
  value: {
    label: "Amount",
  },
} satisfies ChartConfig

export function WaterfallChart() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="value"
          fill={(entry) => {
            if (entry.type === "positive") return "hsl(var(--chart-1))"
            if (entry.type === "negative") return "hsl(var(--chart-5))"
            return "hsl(var(--chart-3))"
          }}
        />
      </BarChart>
    </ChartContainer>
  )
}
