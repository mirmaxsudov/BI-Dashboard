import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BubbleChart } from "@/components/charts/bubble-chart"
import { SankeyChart } from "@/components/charts/sankey-chart"
import { TreemapChart } from "@/components/charts/treemap-chart"
import { WaterfallChart } from "@/components/charts/waterfall-chart"
import { TrafficSourcesChart } from "@/components/charts/traffic-sources-chart"
import { ConversionFunnelChart } from "@/components/charts/conversion-funnel-chart"

const AnalyticsCpt = () => {
    return (<>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Traffic Sources</CardTitle>
                    <CardDescription>Website traffic breakdown with animations</CardDescription>
                </CardHeader>
                <CardContent>
                    <TrafficSourcesChart />
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Conversion Funnel</CardTitle>
                    <CardDescription>User journey through conversion stages</CardDescription>
                </CardHeader>
                <CardContent>
                    <ConversionFunnelChart />
                </CardContent>
            </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Market Treemap</CardTitle>
                    <CardDescription>Market share visualization</CardDescription>
                </CardHeader>
                <CardContent>
                    <TreemapChart />
                </CardContent>
            </Card>
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Revenue Waterfall</CardTitle>
                    <CardDescription>Revenue breakdown and flow analysis</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                    <WaterfallChart />
                </CardContent>
            </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>User Flow Sankey</CardTitle>
                    <CardDescription>User journey flow visualization</CardDescription>
                </CardHeader>
                <CardContent>
                    <SankeyChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Engagement Bubble Chart</CardTitle>
                    <CardDescription>User segments by engagement metrics</CardDescription>
                </CardHeader>
                <CardContent>
                    <BubbleChart />
                </CardContent>
            </Card>
        </div>
    </>)
}

export default AnalyticsCpt;