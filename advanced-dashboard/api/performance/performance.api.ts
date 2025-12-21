import { ChannelsType, GeographicType, RealTimeActivityType, UserGrowthType } from "@/types/performance/PerformanceTypes";
import $api from "../request";

const BASE_PERFORMANCE_URL: string = "/performance";

export const fetchUserGrowth = async (): Promise<UserGrowthType[]> => {
    const response = await $api.get<UserGrowthType[]>(BASE_PERFORMANCE_URL + "/user-growth");
    return response.data;
}

export const fetchRealTimeActivity = async (): Promise<RealTimeActivityType[]> => {
    const response = await $api.get<RealTimeActivityType[]>(BASE_PERFORMANCE_URL + "/real-time-activity");
    return response.data;
}

export const fetchGeographic = async (): Promise<GeographicType[]> => {
    const response = await $api.get<GeographicType[]>(BASE_PERFORMANCE_URL + "/geographic");
    return response.data;
}

export const fetchChannels = async (): Promise<ChannelsType[]> => {
    const response = await $api.get<ChannelsType[]>(BASE_PERFORMANCE_URL + "/channels");
    return response.data;
}