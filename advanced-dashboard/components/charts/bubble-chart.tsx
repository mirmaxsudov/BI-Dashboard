"use client"

import { Scatter, ScatterChart, XAxis, YAxis, ZAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { EngagementBubbleType } from "@/types/analytics/AnalyticsTypes"
import { fetchEngagementBubble } from "@/api/analytics/analytics.api"

// const data = [
//   { x: 95, y: 95, z: 13.8, name: "Premium Users" },
//   { x: 86.5, y: 102.9, z: 14.7, name: "Standard Users" },
//   { x: 80.8, y: 91.5, z: 15.8, name: "Basic Users" },
//   { x: 80.4, y: 102.5, z: 12, name: "Trial Users" },
//   { x: 80.3, y: 86.1, z: 11.8, name: "Free Users" },
//   { x: 78.4, y: 70.1, z: 16.6, name: "Enterprise" },
// ]

const chartConfig = {
  x: {
    label: "Engagement Score",
  },
  y: {
    label: "Satisfaction Score",
  },
  z: {
    label: "Revenue Impact",
  },
} satisfies ChartConfig

export function BubbleChart() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<EngagementBubbleType[]>([]);

  const fetch = async () => {
    try {
      const response = await fetchEngagementBubble();

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
      <ScatterChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis type="number" dataKey="xvalue" name="Engagement" domain={[70, 100]} />
        <YAxis type="number" dataKey="yvalue" name="Satisfaction" domain={[60, 110]} />
        <ZAxis type="number" dataKey="sizeValue" range={[50, 400]} name="Revenue" />
        <ChartTooltip cursor={{ strokeDasharray: "3 3" }} content={<ChartTooltipContent />} />
        <Scatter fill="hsl(var(--chart-4))" fillOpacity={0.6} />
      </ScatterChart>
    </ChartContainer>
  )
}