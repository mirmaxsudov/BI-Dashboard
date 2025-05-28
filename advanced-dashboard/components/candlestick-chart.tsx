"use client"

import { ComposedChart, Bar, Line, XAxis, YAxis } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { use, useEffect, useState } from "react"
import fetchStockPrices from "@/api/advanced/advanced.api"
import StockPriceResponse from "@/types/advanced/AdvancedTypes"

const chartConfig = {
  close: {
    label: "Close Price",
    color: "hsl(var(--chart-1))",
  },
  volume: {
    label: "Volume",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function CandlestickChart() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<StockPriceResponse[]>([]);

  // const data = [
  //   { date: "Jan 1", open: 100, high: 110, low: 95, close: 108, volume: 1200 },
  //   { date: "Jan 2", open: 108, high: 115, low: 105, close: 112, volume: 1500 },
  //   { date: "Jan 3", open: 112, high: 118, low: 110, close: 115, volume: 1800 },
  //   { date: "Jan 4", open: 115, high: 120, low: 112, close: 118, volume: 1600 },
  //   { date: "Jan 5", open: 118, high: 125, low: 115, close: 122, volume: 2000 },
  //   { date: "Jan 6", open: 122, high: 128, low: 120, close: 125, volume: 1900 },
  //   { date: "Jan 7", open: 125, high: 130, low: 123, close: 128, volume: 2200 },
  // ]

  const fetchStocks = async () => {
    try {
      if (loading) {
        const response = await fetchStockPrices();
        console.log(response);
        
        setData(response);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStocks();
  }, [loading])

  if (loading)
    return;

  return (
    <ChartContainer config={chartConfig}>
      <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="date" />
        <YAxis yAxisId="price" orientation="left" />
        <YAxis yAxisId="volume" orientation="right" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar yAxisId="volume" dataKey="volume" fill="var(--color-volume)" opacity={0.3} />
        <Line yAxisId="price" type="monotone" dataKey="close" stroke="var(--color-close)" strokeWidth={2} />
      </ComposedChart>
    </ChartContainer>
  )
}
