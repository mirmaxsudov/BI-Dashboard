import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RevenueChart } from "@/components/charts/revenue-chart"
import { SalesDistributionChart } from "@/components/charts/sales-distribution-chart"
import { RadarChart } from "@/components/charts/radar-chart"
import { ScatterChart } from "@/components/charts/scatter-chart"
import { HeatmapChart } from "@/components/charts/heatmap-chart"
import { GaugeChart } from "@/components/charts/gauge-chart"
import { ProgressChart } from "@/components/charts/progress-chart"

const OverviewCpt = () => {
    return (<>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>Monthly revenue trends with animated transitions</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                    <RevenueChart />
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardTitle className="p-6 pb-2">Sales Distribution</CardTitle>
                <CardContent>
                    <SalesDistributionChart />
                </CardContent>
            </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Performance Radar</CardTitle>
                    <CardDescription>Multi-dimensional performance analysis</CardDescription>
                </CardHeader>
                <CardContent>
                    <RadarChart />
                </CardContent>
            </Card>
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>User Engagement Scatter</CardTitle>
                    <CardDescription>Session duration vs page views correlation</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                    <ScatterChart />
                </CardContent>
            </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle>Performance Gauge</CardTitle>
                    <CardDescription>Real-time system performance</CardDescription>
                </CardHeader>
                <CardContent>
                    <GaugeChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Goal Progress</CardTitle>
                    <CardDescription>Monthly targets and achievements</CardDescription>
                </CardHeader>
                <CardContent>
                    <ProgressChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Activity Heatmap</CardTitle>
                    <CardDescription>User activity by hour and day</CardDescription>
                </CardHeader>
                <CardContent>
                    <HeatmapChart />
                </CardContent>
            </Card>
        </div>
    </>)
}

export default OverviewCpt;