"use client"

import { Pie, PieChart, Cell, Tooltip } from "recharts"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { SalesDistributionType } from "@/types/overview/OverviewTypes"
import { fetchSalesDistribution } from "@/api/overview/overview.api"

const fills = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
]

const chartConfig = {
  value: { label: "Sales %" },
} satisfies ChartConfig

export function SalesDistributionChart() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<SalesDistributionType[]>([])
  const [activeIndex, setActiveIndex] = useState<number>(-1)

  useEffect(() => {
    fetchSalesDistribution()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading…</div>

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }
  const onPieLeave = () => {
    setActiveIndex(-1)
  }

  return (
    <ChartContainer config={chartConfig}>
      <PieChart width={300} height={300}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={data}
          dataKey="value"
          nameKey="category"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={120}
          activeIndex={activeIndex}
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
        >
          {data.map((entry, i) => (
            <Cell key={entry.category} fill={fills[i % fills.length]} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}