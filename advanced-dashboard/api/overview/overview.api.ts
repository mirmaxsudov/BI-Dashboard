import { EngagementType, GaugeType, GoalsType, HeatMapType, KpisType, MonthlyFinancialsType, RadarMetricsType, SalesDistributionType } from "@/types/overview/OverviewTypes";
import $api from "../request";

const BASE_OVERVIEW_URL: string = "/overview";

export const fetchSalesDistribution = async (): Promise<SalesDistributionType[]> => {
    const response = await $api.get<SalesDistributionType[]>(BASE_OVERVIEW_URL + "/sales-distribution");
    return response.data;
}

export const fetchRadarMetrics = async (): Promise<RadarMetricsType[]> => {
    const response = await $api.get<RadarMetricsType[]>(BASE_OVERVIEW_URL + "/radar-metrics");
    return response.data;
}

export const fetchMonthlyFinancials = async (): Promise<MonthlyFinancialsType[]> => {
    const response = await $api.get<MonthlyFinancialsType[]>(BASE_OVERVIEW_URL + "/monthly-financials");
    return response.data;
}

export const fetchKpis = async (): Promise<KpisType[]> => {
    const response = await $api.get<KpisType[]>(BASE_OVERVIEW_URL + "/kpis");
    return response.data;
}

export const fetchHeatmap = async (): Promise<HeatMapType[]> => {
    const response = await $api.get<HeatMapType[]>(BASE_OVERVIEW_URL + "/heatmap");
    return response.data;
}

export const fetchGoals = async (): Promise<GoalsType[]> => {
    const response = await $api.get<GoalsType[]>(BASE_OVERVIEW_URL + "/goals");
    return response.data;
}

export const fetchGauge = async (): Promise<GaugeType> => {
    const response = await $api.get<GaugeType>(BASE_OVERVIEW_URL + "/gauge");
    return response.data;
}

export const fetchEngagement = async (): Promise<EngagementType[]> => {
    const response = await $api.get<EngagementType[]>(BASE_OVERVIEW_URL + "/engagement");
    return response.data;
}