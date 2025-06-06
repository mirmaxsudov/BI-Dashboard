package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.overview;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Month;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "monthly_financial")
public class MonthlyFinancial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Month of the year
     */
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Month month;

    /**
     * e.g. total revenue for that month
     */
    @Column(nullable = false)
    private BigDecimal revenue;

    /**
     * e.g. profit for that month
     */
    @Column(nullable = false)
    private BigDecimal profit;
}