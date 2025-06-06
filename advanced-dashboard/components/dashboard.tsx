"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Users, TrendingUp, TrendingDown, Download, RefreshCw, Target, Zap, Globe } from "lucide-react"
import AdvancedCpt from "./cpts/advanced/AdvancedCpt"
import ReportCpt from "./cpts/reports/ReportsCpt"
import PerformanceCpt from "./cpts/performance/PerformanceCpt"
import AnalyticsCpt from "./cpts/analytics/AnalyticsCpt"
import OverviewCpt from "./cpts/overview/OverviewCpt"

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
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <OverviewCpt />
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <AnalyticsCpt />
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <PerformanceCpt />
        </TabsContent>
        <TabsContent value="advanced" className="space-y-4">
          <AdvancedCpt />
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <ReportCpt />
        </TabsContent>
      </Tabs>
    </div>
  )
}