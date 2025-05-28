"use client"

import { Treemap, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Technology",
    children: [
      { name: "Software", size: 3500 },
      { name: "Hardware", size: 2800 },
      { name: "AI/ML", size: 2200 },
      { name: "Cloud", size: 1800 },
    ],
  },
  {
    name: "Finance",
    children: [
      { name: "Banking", size: 2500 },
      { name: "Insurance", size: 1900 },
      { name: "Investment", size: 1600 },
    ],
  },
  {
    name: "Healthcare",
    children: [
      { name: "Pharma", size: 2100 },
      { name: "Medical Devices", size: 1400 },
    ],
  },
]

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
]

export function TreemapChart() {
  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <Treemap data={data} dataKey="size" aspectRatio={4 / 3} stroke="#fff" fill={COLORS[0]} />
      </ResponsiveContainer>
    </div>
  )
}
