import { CandlestickChart } from "../../candlestick-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import Metrics from "./Metrics";

const AdvancedCpt = () => {
    return <>
        <div className="grid gap-4 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Stock Price Analysis</CardTitle>
                    <CardDescription>Candlestick chart with volume indicators</CardDescription>
                </CardHeader>
                <CardContent>
                    <CandlestickChart />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Advanced Metrics</CardTitle>
                    <CardDescription>Complex data relationships and patterns</CardDescription>
                </CardHeader>
                <CardContent>
                    <Metrics />
                </CardContent>
            </Card>
        </div>
    </>
}

export default AdvancedCpt;