"use client"

const data = [
  { source: "Website", target: "Sign Up", value: 1000 },
  { source: "Website", target: "Browse", value: 2000 },
  { source: "Social Media", target: "Sign Up", value: 500 },
  { source: "Social Media", target: "Browse", value: 800 },
  { source: "Sign Up", target: "Purchase", value: 300 },
  { source: "Browse", target: "Purchase", value: 400 },
  { source: "Browse", target: "Exit", value: 2400 },
]

export function SankeyChart() {
  return (
    <div className="w-full h-[250px] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="grid grid-cols-3 gap-8 items-center">
          <div className="space-y-2">
            <div className="bg-blue-100 p-3 rounded text-sm font-medium">Website (3000)</div>
            <div className="bg-green-100 p-3 rounded text-sm font-medium">Social (1300)</div>
          </div>
          <div className="space-y-2">
            <div className="bg-purple-100 p-3 rounded text-sm font-medium">Sign Up (1500)</div>
            <div className="bg-orange-100 p-3 rounded text-sm font-medium">Browse (2800)</div>
          </div>
          <div className="space-y-2">
            <div className="bg-green-200 p-3 rounded text-sm font-medium">Purchase (700)</div>
            <div className="bg-red-100 p-3 rounded text-sm font-medium">Exit (2400)</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">User Journey Flow Visualization</div>
      </div>
    </div>
  )
}
