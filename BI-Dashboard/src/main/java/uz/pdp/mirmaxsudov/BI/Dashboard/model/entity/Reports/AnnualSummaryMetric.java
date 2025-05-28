package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.Reports;

import jakarta.persistence.*;

@Entity
@Table(name = "annual_summary_metric")
public class AnnualSummaryMetric {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "summary_name", nullable = false)
    private String summaryName;          // e.g. "Total Revenue"

    @Column(nullable = false)
    private String value;                // e.g. "$2.4M" or "45 Countries"
}