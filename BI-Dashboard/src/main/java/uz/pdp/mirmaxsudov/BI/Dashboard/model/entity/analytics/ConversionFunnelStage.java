package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.analytics;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
@Entity
@Table(name = "conversion_funnel_stage")
public class ConversionFunnelStage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String stageName;       // e.g., "Visitors", "Leads"

    @Column(nullable = false)
    private Integer count;          // count at this stage

    @Column(nullable = false)
    private Integer sequenceOrder;  // order in funnel (1 = bottom, larger = higher stage)

    // getters and setters
}