package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.overview;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.Month;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MonthlyFinancialDto {
    private Month month;
    private BigDecimal revenue;
    private BigDecimal profit;
}