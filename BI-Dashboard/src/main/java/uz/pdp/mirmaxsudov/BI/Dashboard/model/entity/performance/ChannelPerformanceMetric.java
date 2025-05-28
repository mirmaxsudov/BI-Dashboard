package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.performance;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "channel_performance_metric")
public class ChannelPerformanceMetric {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "channel_name", nullable = false)
    private String channelName;     // e.g. "Email", "Social", etc.

    @Column(name = "current_value", nullable = false)
    private Double currentValue;

    @Column(name = "baseline_value", nullable = false)
    private Double baselineValue;
}