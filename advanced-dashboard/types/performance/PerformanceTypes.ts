export type UserGrowthType = {
    month: string;
    userCount: number;
}

export type RealTimeActivityType = {
    timestamp: string,
    activeUsers: number;
}

export type GeographicType = {
    region: string,
    percentage: number;
}

export type ChannelsType = {
    channelName: string;
    currentValue: number;
    baselineValue: number;
}