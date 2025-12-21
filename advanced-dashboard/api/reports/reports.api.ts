import ReportType from "@/types/reports/ReportsTypes"
import $api from "../request"

const BASE_REPORT_URL: string = "/reports"

export const fetchQuarterly = async (): Promise<ReportType[]> => {
    const response = await $api.get<ReportType[]>(BASE_REPORT_URL + "/quarterly");
    return response.data;
}

export const fetchMonthly = async (): Promise<ReportType[]> => {
    const response = await $api.get<ReportType[]>(BASE_REPORT_URL + "/monthly");
    return response.data;
}

export const fetchAnnual = async (): Promise<ReportType[]> => {
    const response = await $api.get<ReportType[]>(BASE_REPORT_URL + "/annual");
    return response.data;
}