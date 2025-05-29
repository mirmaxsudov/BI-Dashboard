"use client"

import React, { useEffect, useState } from "react"
import { ResponsiveContainer, Sankey, Tooltip } from "recharts"
import { fetchUserFlow } from "@/api/analytics/analytics.api"
import { UserFlowType } from "@/types/analytics/AnalyticsTypes"

export function SankeyChart() {
  const [loading, setLoading] = useState(true)
  const [nodes, setNodes] = useState<{ name: string }[]>([])
  const [links, setLinks] = useState<{ source: number; target: number; value: number }[]>([])

  useEffect(() => {
    fetchUserFlow()
      .then((response: UserFlowType[]) => {
        const nodeList = Array.from(
          new Set(response.flatMap(d => [d.source, d.target]))
        ).map(name => ({ name }))
        setNodes(nodeList)

        setLinks(response.map(d => ({
          source: nodeList.findIndex(n => n.name === d.source),
          target: nodeList.findIndex(n => n.name === d.target),
          value: d.count,
        })))
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading…</div>

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <Sankey
          data={{ nodes, links }}
          nodePadding={20}
          nodeWidth={15}
          link={{ stroke: "#8884d8" }}
          style={{ fontSize: 12 }}
        >
          {/* custom tooltip inside the Sankey: */}
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null
              // payload[0].payload has { source, target, value }
              const { source, target, value } = payload[0].payload as any
              const from = nodes[source].name
              const to = nodes[target].name
              return (
                <div className="bg-white p-2 rounded shadow">
                  <div className="font-semibold">
                    {from} → {to}
                  </div>
                  <div>Count: {value}</div>
                </div>
              )
            }}
          />
        </Sankey>
      </ResponsiveContainer>
    </div>
  )
}