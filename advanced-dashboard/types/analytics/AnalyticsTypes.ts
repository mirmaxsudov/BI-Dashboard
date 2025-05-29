export type UserFlowType = {
    source: string;
    target: string;
    count: number;
}

export type TrafficSourcesType = {
    sourceName: string;
    visitors: number;
}

export type RevenueWaterfallType = {
    itemName: string,
    amount: number,
    displayOrder: number;
}

export type MarketTreemapType = {
    segmentName: string,
    value: number;
}

export type EngagementBubbleType = {
    segmentName: string;
    sizeValue: number;
    yvalue: number;
    xvalue: number;
}

export type ConversionFunnelType = {
    stageName: string;
    count: number;
    sequenceOrder: number;
}