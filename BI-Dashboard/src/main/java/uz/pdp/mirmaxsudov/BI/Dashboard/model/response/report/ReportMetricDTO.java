package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.report;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReportMetricDTO {
    private String name;
    private String value;
}