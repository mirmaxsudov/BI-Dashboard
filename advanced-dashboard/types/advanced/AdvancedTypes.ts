type StockPriceResponse = {
    date: string;
    openPrice: number;
    highPrice: number;
    lowPrice: number;
    closePrice: number;
    volume: number;
}

export type MetricsResponse = {
    metricName: string;
    value: number;
    unit: string;
}

export default StockPriceResponse;