"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect, useState } from "react";
import { ChannelsType } from "@/types/performance/PerformanceTypes";
import { fetchChannels } from "@/api/performance/performance.api";

const chartConfig = {
  performance: {
    label: "Performance",
    color: "hsl(var(--chart-1))",
  },
  target: {
    label: "Target",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function PerformanceChart() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<ChannelsType[]>([]);

  const fetch = async () => {
    try {
      const response = await fetchChannels();
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
      <BarChart accessibilityLayer data={data}>
        <XAxis
          dataKey="channelName"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis hide />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
        <Bar dataKey="currentValue" fill="var(--color-performance)" radius={4} />
        <Bar dataKey="baselineValue" fill="var(--color-target)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
