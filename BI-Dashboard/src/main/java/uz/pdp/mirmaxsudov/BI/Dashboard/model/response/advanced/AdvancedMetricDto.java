package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.advanced;

public record AdvancedMetricDto(
        String metricName,
        Double value,
        String unit
) {
}