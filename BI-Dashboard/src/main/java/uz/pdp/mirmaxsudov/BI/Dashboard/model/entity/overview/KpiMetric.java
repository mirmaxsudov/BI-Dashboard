package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.overview;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "kpi_metric")
public class KpiMetric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private BigDecimal value;

    @Column(name = "change_percent", nullable = false)
    private Double changePercent;

    @Column(name = "positive_change", nullable = false)
    private Boolean positiveChange;
}