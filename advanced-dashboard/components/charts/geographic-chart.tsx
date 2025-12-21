"use client"

import { Pie, PieChart, Cell } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect, useState } from "react";
import { GeographicType } from "@/types/performance/PerformanceTypes";
import { fetchGeographic } from "@/api/performance/performance.api";

const dataFill = [
  { fill: "hsl(var(--chart-1))" },
  { fill: "hsl(var(--chart-2))" },
  { fill: "hsl(var(--chart-3))" },
  { fill: "hsl(var(--chart-4))" },
]

const chartConfig = {
  users: {
    label: "Users %",
  },
} satisfies ChartConfig

export function GeographicChart() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<GeographicType[]>([]);

  const fetch = async () => {
    try {
      const response = await fetchGeographic();

      setData(response)
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (loading)
      fetch();
  }, [loading]);

  if (loading)
    return;

  return (
    <ChartContainer config={chartConfig}>
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={data}
          dataKey="percentage"
          nameKey="region"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
        >
          {dataFill.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}
