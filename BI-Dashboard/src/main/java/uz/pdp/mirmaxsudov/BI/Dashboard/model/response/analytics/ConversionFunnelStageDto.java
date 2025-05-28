package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.analytics;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ConversionFunnelStageDto {
    private String stageName;
    private Integer count;
    private Integer sequenceOrder;
}