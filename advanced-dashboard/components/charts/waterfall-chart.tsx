"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect, useState } from "react";
import { RevenueWaterfallType } from "@/types/analytics/AnalyticsTypes";
import { fetchRevenueWaterfall } from "@/api/analytics/analytics.api";

const chartConfig = {
  value: {
    label: "Amount",
  },
} satisfies ChartConfig

export function WaterfallChart() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<RevenueWaterfallType[]>([]);

  const fetch = async () => {
    try {
      const response = await fetchRevenueWaterfall();
      setData(response);
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
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="itemName" angle={-45} textAnchor="end" height={80} />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="amount"
          fill={(entry) => {
            if (entry.type === "positive") return "hsl(var(--chart-1))"
            if (entry.type === "negative") return "hsl(var(--chart-5))"
            return "hsl(var(--chart-3))"
          }}
        />
      </BarChart>
    </ChartContainer>
  )
};