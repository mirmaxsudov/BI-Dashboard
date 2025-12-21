import { GeographicChart } from "@/components/charts/geographic-chart";
import { PerformanceChart } from "@/components/charts/performance-chart";
import { RealtimeChart } from "@/components/charts/realtime-chart";
import { UserGrowthChart } from "@/components/charts/user-growth-chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const PerformanceCpt = () => {
    return <>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                    <CardDescription>Key performance indicators across channels</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                    <PerformanceChart />
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Geographic Distribution</CardTitle>
                    <CardDescription>User distribution by region</CardDescription>
                </CardHeader>
                <CardContent>
                    <GeographicChart />
                </CardContent>
            </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>User Growth</CardTitle>
                    <CardDescription>User acquisition trends</CardDescription>
                </CardHeader>
                <CardContent>
                    <UserGrowthChart />
                </CardContent>
            </Card>
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Real-time Activity</CardTitle>
                    <CardDescription>Live user activity and engagement</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                    <RealtimeChart />
                </CardContent>
            </Card>
        </div>
    </>
}

export default PerformanceCpt;