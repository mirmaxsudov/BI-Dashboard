package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.Reports;

import jakarta.persistence.*;

@Entity
@Table(name = "monthly_report_metric")
public class MonthlyReportMetric {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "metric_name", nullable = false)
    private String metricName;           // e.g. "Revenue Growth"

    @Column(nullable = false)
    private String value;                // e.g. "+15.2%"

    // getters and setters
}