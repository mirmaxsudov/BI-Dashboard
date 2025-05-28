package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.analytics;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "revenue_waterfall_item")
public class RevenueWaterfallItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String itemName;        // e.g., "Starting Revenue", "Churn"

    @Column(nullable = false)
    private BigDecimal amount;      // positive or negative contribution

    @Column(nullable = false)
    private Integer displayOrder;   // order in the chart

    // getters and setters
}