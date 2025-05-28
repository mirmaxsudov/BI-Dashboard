package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.overview;

import lombok.Getter;

import java.math.BigDecimal;
import java.time.Month;

@Getter
public class MonthlyFinancialDto {
    private Month month;
    private BigDecimal revenue;
    private BigDecimal profit;

    public MonthlyFinancialDto(Month month, BigDecimal revenue, BigDecimal profit) {
        this.month = month;
        this.revenue = revenue;
        this.profit = profit;
    }

}