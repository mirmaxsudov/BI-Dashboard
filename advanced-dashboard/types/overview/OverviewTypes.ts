export type SalesDistributionType = {
    category: string;
    value: number;
}

export type RadarMetricsType = {
    dimension: string,
    baselineValue: number,
    currentValue: number
}

export type MonthlyFinancialsType = {
    month: string,
    revenue: number,
    profit: number
}

export type KpisType = {
    name: string;
    value: number;
    changePercent: number;
    positiveChange: boolean;
}

export type HeatMapType = {
    id: number,
    dayOfWeek: number,
    hourOfDay: number,
    activityCount: number
}

export type GoalsType = {
    id: number;
    goalName: string;
    progress: number;
}

export type GaugeType = {
    id: number,
    value: number
}

export type EngagementType = {
    id: number,
    sessionDurationSec: number,
    pageViews: number
}