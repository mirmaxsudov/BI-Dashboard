"use client"

const data = [
  { day: "Mon", hour: "00", value: 12 },
  { day: "Mon", hour: "04", value: 8 },
  { day: "Mon", hour: "08", value: 45 },
  { day: "Mon", hour: "12", value: 78 },
  { day: "Mon", hour: "16", value: 65 },
  { day: "Mon", hour: "20", value: 32 },
  { day: "Tue", hour: "00", value: 15 },
  { day: "Tue", hour: "04", value: 10 },
  { day: "Tue", hour: "08", value: 52 },
  { day: "Tue", hour: "12", value: 85 },
  { day: "Tue", hour: "16", value: 72 },
  { day: "Tue", hour: "20", value: 38 },
  { day: "Wed", hour: "00", value: 18 },
  { day: "Wed", hour: "04", value: 12 },
  { day: "Wed", hour: "08", value: 48 },
  { day: "Wed", hour: "12", value: 82 },
  { day: "Wed", hour: "16", value: 68 },
  { day: "Wed", hour: "20", value: 35 },
]

const getColor = (value: number) => {
  const intensity = Math.min(value / 100, 1)
  return `hsl(220, 70%, ${90 - intensity * 40}%)`
}

export function HeatmapChart() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const hours = ["00", "04", "08", "12", "16", "20"]

  return (
    <div className="w-full h-[200px]">
      <div className="grid grid-cols-6 gap-1 h-full">
        {hours.map((hour) => (
          <div key={hour} className="text-xs text-center text-muted-foreground mb-1">
            {hour}:00
          </div>
        ))}
        {days.slice(0, 3).map((day) => (
          <div key={day} className="col-span-6 grid grid-cols-6 gap-1">
            {hours.map((hour) => {
              const dataPoint = data.find((d) => d.day === day && d.hour === hour)
              const value = dataPoint?.value || 0
              return (
                <div
                  key={`${day}-${hour}`}
                  className="aspect-square rounded-sm flex items-center justify-center text-xs font-medium"
                  style={{ backgroundColor: getColor(value) }}
                  title={`${day} ${hour}:00 - ${value} users`}
                >
                  {value}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
