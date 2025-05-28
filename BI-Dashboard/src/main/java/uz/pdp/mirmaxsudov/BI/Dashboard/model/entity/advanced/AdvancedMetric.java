package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.advanced;

import jakarta.persistence.*;

@Entity
@Table(name = "advanced_metric")
public class AdvancedMetric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Metric name (e.g., "Uptime", "API Calls")
     */
    @Column(name = "metric_name", nullable = false, unique = true)
    private String metricName;

    /**
     * Numeric value (e.g., 98.5)
     */
    @Column(nullable = false)
    private Double value;

    /**
     * Optional unit (e.g., "%", "s", "K" for thousands)
     */
    @Column(length = 10)
    private String unit;

    // Getters and setters omitted for brevity
}
