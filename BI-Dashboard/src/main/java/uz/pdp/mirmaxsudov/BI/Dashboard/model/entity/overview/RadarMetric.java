package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.overview;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Entity
@Getter
@AllArgsConstructor
@Table(name = "radar_metric")
public class RadarMetric {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * e.g. "Performance", "Security", "Usability", etc.
     */
    @Column(nullable = false)
    private String dimension;

    /**
     * last‐period value (baseline)
     */
    @Column(name = "baseline_value", nullable = false)
    private Double baselineValue;

    /**
     * current‐period value
     */
    @Column(name = "current_value", nullable = false)
    private Double currentValue;

    // getters & setters...
}