package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.overview;

import lombok.Getter;

import java.math.BigDecimal;

@Getter
public class KpiMetricDto {
    private String name;
    private BigDecimal value;
    private Double changePercent;
    private Boolean positiveChange;

    public KpiMetricDto(String name, BigDecimal value, Double changePercent, Boolean positiveChange) {
        this.name = name;
        this.value = value;
        this.changePercent = changePercent;
        this.positiveChange = positiveChange;
    }
}