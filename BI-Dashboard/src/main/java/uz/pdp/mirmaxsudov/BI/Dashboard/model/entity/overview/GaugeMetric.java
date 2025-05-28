package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.overview;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Entity
@Getter
@AllArgsConstructor
@Table(name = "performance_gauge")
public class GaugeMetric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Gauge value (e.g. 75.0 for 75%)
     */
    @Column(nullable = false)
    private Double value;
}