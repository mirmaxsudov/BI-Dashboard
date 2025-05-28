package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.advanced;

import java.math.BigDecimal;
import java.time.LocalDate;

public record StockPriceRecordDto(
        LocalDate date,
        BigDecimal open,
        BigDecimal high,
        BigDecimal low,
        BigDecimal close,
        Long volume
) {
}