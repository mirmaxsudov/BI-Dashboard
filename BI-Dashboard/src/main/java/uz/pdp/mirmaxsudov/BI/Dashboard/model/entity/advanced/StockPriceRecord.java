package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.advanced;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "stock_price_record")
public class StockPriceRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Date for the record (e.g., Jan 1) */
    @Column(nullable = false)
    private LocalDate date;

    @Column(name = "open_price", nullable = false)
    private BigDecimal openPrice;

    @Column(name = "high_price", nullable = false)
    private BigDecimal highPrice;

    @Column(name = "low_price", nullable = false)
    private BigDecimal lowPrice;

    @Column(name = "close_price", nullable = false)
    private BigDecimal closePrice;

    /** Trading volume (e.g., number of shares) */
    @Column(nullable = false)
    private Long volume;

    // Getters and setters omitted for brevity
}