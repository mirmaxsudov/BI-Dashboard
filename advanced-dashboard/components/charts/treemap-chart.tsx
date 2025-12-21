"use client"

import { fetchMarketTreemap } from "@/api/analytics/analytics.api";
import { MarketTreemapType } from "@/types/analytics/AnalyticsTypes";
import { useEffect, useState } from "react";
import { Treemap, ResponsiveContainer, Cell, Tooltip } from "recharts";

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export function TreemapChart() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MarketTreemapType[]>([]);

  useEffect(() => {
    fetchMarketTreemap()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading…</div>;

  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer>
        <Treemap
          data={data}
          dataKey="value"
          nameKey="segmentName"
          stroke="#fff"
        >
          {data.map((entry, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Treemap>
        <Tooltip />
      </ResponsiveContainer>
    </div>
  );
}
