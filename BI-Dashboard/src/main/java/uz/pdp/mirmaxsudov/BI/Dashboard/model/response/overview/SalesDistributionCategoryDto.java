package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.overview;

import lombok.Getter;

import java.math.BigDecimal;

@Getter
public class SalesDistributionCategoryDto {
    private String category;
    private BigDecimal value;

    public SalesDistributionCategoryDto(String category, BigDecimal value) {
        this.category = category;
        this.value = value;
    }

}