package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.performance;

import uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.performance.ChannelPerformanceMetric;

public class ChannelPerformanceMetricDto {
    public String channelName;
    public double currentValue;
    public double baselineValue;

    public static ChannelPerformanceMetricDto from(ChannelPerformanceMetric e) {
        ChannelPerformanceMetricDto d = new ChannelPerformanceMetricDto();
        d.channelName = e.getChannelName();
        d.currentValue = e.getCurrentValue();
        d.baselineValue = e.getBaselineValue();
        return d;
    }
}