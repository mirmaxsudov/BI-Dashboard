package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.overview;

import lombok.Getter;

@Getter
public class RadarMetricDto {
    private String dimension;
    private Double baselineValue;
    private Double currentValue;

    public RadarMetricDto(String dimension, Double baselineValue, Double currentValue) {
        this.dimension = dimension;
        this.baselineValue = baselineValue;
        this.currentValue = currentValue;
    }

}