package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.analytics;

import jakarta.persistence.*;

@Entity
@Table(name = "engagement_bubble")
public class EngagementBubblePoint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String segmentName;     // e.g., "Power Users"

    @Column(nullable = false)
    private Double xValue;          // e.g., page views or score

    @Column(nullable = false)
    private Double yValue;          // e.g., session duration or rating

    @Column(nullable = false)
    private Double sizeValue;       // bubble size (e.g., segment count)

    // getters and setters
}
