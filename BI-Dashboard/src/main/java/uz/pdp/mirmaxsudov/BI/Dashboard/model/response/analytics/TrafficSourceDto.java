package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.analytics;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TrafficSourceDto {
    private String sourceName;
    private Integer visitors;
}