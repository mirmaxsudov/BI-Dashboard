"use client"

import { fetchGoals } from "@/api/overview/overview.api"
import { Progress } from "@/components/ui/progress"
import { GoalsType } from "@/types/overview/OverviewTypes"
import { useEffect, useState } from "react"

const COLORS = [
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-orange-500",
]

export function ProgressChart() {
  const [loading, setLoading] = useState(true)
  const [goals, setGoals] = useState<GoalsType[]>([])

  useEffect(() => {
    fetchGoals()
      .then((data) => setGoals(data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading…</div>

  return (
    <div className="space-y-4">
      {goals.map((goal, index) => (
        <div key={goal.id} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{goal.goalName}</span>
            <span className="text-muted-foreground">{goal.progress}%</span>
          </div>
          <Progress
            value={goal.progress}
            className={`h-2 ${COLORS[index % COLORS.length]}`}
          />
        </div>
      ))}
    </div>
  )
}