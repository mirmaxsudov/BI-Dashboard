"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Users, TrendingUp, TrendingDown, Download, RefreshCw, Target, Zap, Globe } from "lucide-react"
import { RevenueChart } from "@/components/charts/revenue-chart"
import { UserGrowthChart } from "@/components/charts/user-growth-chart"
import { SalesDistributionChart } from "@/components/charts/sales-distribution-chart"
import { PerformanceChart } from "@/components/charts/performance-chart"
import { TrafficSourcesChart } from "@/components/charts/traffic-sources-chart"
import { ConversionFunnelChart } from "@/components/charts/conversion-funnel-chart"
import { GeographicChart } from "@/components/charts/geographic-chart"
import { RealtimeChart } from "@/components/charts/realtime-chart"
import { RadarChart } from "@/components/charts/radar-chart"
import { ScatterChart } from "@/components/charts/scatter-chart"
import { HeatmapChart } from "@/components/charts/heatmap-chart"
import { GaugeChart } from "@/components/charts/gauge-chart"
import { TreemapChart } from "@/components/charts/treemap-chart"
import { WaterfallChart } from "@/components/charts/waterfall-chart"
import { CandlestickChart } from "@/components/charts/candlestick-chart"
import { ProgressChart } from "@/components/charts/progress-chart"
import { BubbleChart } from "@/components/charts/bubble-chart"
import { SankeyChart } from "@/components/charts/sankey-chart"
import AdvancedCpt from "./cpts/advanced/AdvancedCpt"

export function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Advanced Analytics Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Enhanced KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +20.1%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +180.1%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.24%</div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center text-red-600">
                <TrendingDown className="mr-1 h-3 w-3" />
                -2.1%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Performance Score</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2</div>
            <p className="text-xs text-muted-foreground">
              <span className="inline-flex items-center text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +5.2%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Tabs with More Charts */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
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
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
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
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
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
        </TabsContent>
        <TabsContent value="advanced" className="space-y-4">
          <AdvancedCpt/>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Monthly Report
                </CardTitle>
                <CardDescription>Comprehensive monthly performance summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Revenue Growth</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      +15.2%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">User Acquisition</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      +8.7%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Conversion Rate</span>
                    <Badge variant="destructive">-2.1%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Customer Satisfaction</span>
                    <Badge className="bg-purple-100 text-purple-800">94.2%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Quarterly Trends
                </CardTitle>
                <CardDescription>Quarter-over-quarter performance analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Q4 vs Q3</span>
                    <Badge className="bg-green-100 text-green-800">+22.5%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Customer Retention</span>
                    <Badge className="bg-blue-100 text-blue-800">94.2%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Market Share</span>
                    <Badge variant="secondary">12.8%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Profit Margin</span>
                    <Badge className="bg-purple-100 text-purple-800">28.5%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Annual Summary
                </CardTitle>
                <CardDescription>Year-end performance overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Total Revenue</span>
                    <Badge className="bg-green-100 text-green-800">$2.4M</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">New Customers</span>
                    <Badge className="bg-blue-100 text-blue-800">15,420</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">ROI</span>
                    <Badge className="bg-purple-100 text-purple-800">285%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Global Reach</span>
                    <Badge variant="secondary">45 Countries</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}