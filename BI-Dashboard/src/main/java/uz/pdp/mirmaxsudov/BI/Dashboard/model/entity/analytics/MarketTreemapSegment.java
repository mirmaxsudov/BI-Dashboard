package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.analytics;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "market_treemap_segment")
public class MarketTreemapSegment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String segmentName;     // e.g., "Software", "Banking"

    @Column(nullable = false)
    private BigDecimal value;       // share or metric value

    // getters and setters
}