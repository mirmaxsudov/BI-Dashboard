import StockPriceResponse, { MetricsResponse } from "@/types/advanced/AdvancedTypes";
import $api from "../request"

const BASE_ADVANCED_URL: string = "/advanced"

const fetchStockPrices = async (): Promise<StockPriceResponse[]> => {
    const response = await $api.get<StockPriceResponse[]>(BASE_ADVANCED_URL + "/stock-prices");
    return response.data;
}

export const fetchMetrics = async (): Promise<MetricsResponse[]> => {
    const response = await $api.get<MetricsResponse[]>(BASE_ADVANCED_URL + "/metrics");
    return response.data;
}

export default fetchStockPrices;