"use client"

import { fetchMetrics } from "@/api/advanced/advanced.api";
import { MetricsResponse } from "@/types/advanced/AdvancedTypes";
import { useEffect, useState } from "react";
import CountUp from 'react-countup';

const Metrics = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [d, setD] = useState<MetricsResponse[]>([]);

    useEffect(() => {
        if (!loading)
            return;

        fetchMetricAsync();
    }, [loading]);

    const fetchMetricAsync = async () => {
        try {
            const data = await fetchMetrics();
            console.log(data);
            setD(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    return <>
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                {d.slice(0, 2).map(data => {
                    return <div className="space-y-2">
                        <div className="text-2xl font-bold text-green-600">
                            <CountUp start={0} end={data.value} duration={3} />{data.unit}</div>
                        <div className="text-sm text-muted-foreground">{data.metricName}</div>
                    </div>
                })}
            </div>
            <div className="grid grid-cols-2 gap-4">
                {d.slice(2).map(data => {
                    return <div className="space-y-2">
                        <div className="text-2xl font-bold text-green-600">
                            <CountUp start={0} end={data.value} duration={3} />{data.unit}</div>
                        <div className="text-sm text-muted-foreground">{data.metricName}</div>
                    </div>
                })}
            </div>
        </div>
    </>
}

export default Metrics;