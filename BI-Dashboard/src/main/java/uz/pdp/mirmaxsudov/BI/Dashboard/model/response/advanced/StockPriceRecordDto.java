package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.advanced;

import java.math.BigDecimal;
import java.time.LocalDate;

public record StockPriceRecordDto(
        LocalDate date,
        BigDecimal openPrice,
        BigDecimal highPrice,
        BigDecimal lowPrice,
        BigDecimal closePrice,
        Long volume
) {
}