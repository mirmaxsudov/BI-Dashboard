package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.performance;

import jakarta.persistence.*;

@Entity
@Table(name = "geographic_distribution")
public class GeographicDistributionEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String region;         // e.g. country or region name

    @Column(nullable = false)
    private Double percentage;     // e.g. share of users
}