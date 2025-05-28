package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.analytics;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserFlowLinkDto {
    private String source;
    private String target;
    private Integer count;
}
