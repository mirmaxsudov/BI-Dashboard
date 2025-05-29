import { ConversionFunnelType, EngagementBubbleType, MarketTreemapType, RevenueWaterfallType, TrafficSourcesType, UserFlowType } from "@/types/analytics/AnalyticsTypes";
import $api from "../request";

const BASE_ANALTICS_URL: string = "/analytics";

export const fetchUserFlow = async (): Promise<UserFlowType[]> => {
    const response = await $api.get<UserFlowType[]>(BASE_ANALTICS_URL + "/user-flow");
    return response.data;
}

export const fetchTrafficSources = async (): Promise<TrafficSourcesType[]> => {
    const response = await $api.get<TrafficSourcesType[]>(BASE_ANALTICS_URL + "/traffic-sources");
    return response.data;
}

export const fetchRevenueWaterfall = async (): Promise<RevenueWaterfallType[]> => {
    const response = await $api.get<RevenueWaterfallType[]>(BASE_ANALTICS_URL + "/revenue-waterfall");
    return response.data;
}

export const fetchMarketTreemap = async (): Promise<MarketTreemapType[]> => {
    const response = await $api.get<MarketTreemapType[]>(BASE_ANALTICS_URL + "/market-treemap");
    return response.data;
}

export const fetchEngagementBubble = async (): Promise<EngagementBubbleType[]> => {
    const response = await $api.get<EngagementBubbleType[]>(BASE_ANALTICS_URL + "/engagement-bubble");
    return response.data;
}

export const fetchConversionFunnel = async (): Promise<ConversionFunnelType[]> => {
    const response = await $api.get<ConversionFunnelType[]>(BASE_ANALTICS_URL + "/conversion-funnel");
    return response.data;
}