type StockPriceResponse = {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

export type MetricsResponse = {
    metricName: string;
    value: number;
    unit: string;
}

export default StockPriceResponse;