package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.Reports;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "quarterly_trend_metric")
public class QuarterlyTrendMetric {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "trend_name", nullable = false)
    private String trendName;            // e.g. "Q4 vs Q3"

    @Column(nullable = false)
    private String value;                // e.g. "+22.5%" or numeric values

    // getters and setters
}