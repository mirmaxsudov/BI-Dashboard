package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.analytics;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EngagementBubblePointDto {
    private String segmentName;
    private Double xValue;
    private Double yValue;
    private Double sizeValue;
}