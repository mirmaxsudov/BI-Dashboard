"use client"

import { Progress } from "@/components/ui/progress"

const goals = [
  { name: "Revenue Target", current: 85, target: 100, color: "bg-green-500" },
  { name: "User Growth", current: 72, target: 100, color: "bg-blue-500" },
  { name: "Market Share", current: 45, target: 100, color: "bg-purple-500" },
  { name: "Customer Satisfaction", current: 94, target: 100, color: "bg-orange-500" },
]

export function ProgressChart() {
  return (
    <div className="space-y-4">
      {goals.map((goal, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{goal.name}</span>
            <span className="text-muted-foreground">{goal.current}%</span>
          </div>
          <Progress value={goal.current} className="h-2" />
        </div>
      ))}
    </div>
  )
}
