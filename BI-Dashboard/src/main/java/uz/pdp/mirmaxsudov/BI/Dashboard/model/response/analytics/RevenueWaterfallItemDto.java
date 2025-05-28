package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.analytics;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class RevenueWaterfallItemDto {
    private String itemName;
    private BigDecimal amount;
    private Integer displayOrder;
}