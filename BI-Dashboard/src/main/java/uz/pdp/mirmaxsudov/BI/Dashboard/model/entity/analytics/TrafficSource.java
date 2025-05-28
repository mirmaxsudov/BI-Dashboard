package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.analytics;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "traffic_source")
public class TrafficSource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String sourceName;      // e.g., "Organic Search", "Paid Search"

    @Column(nullable = false)
    private Integer visitors;       // number of visitors

    // getters and setters
}
