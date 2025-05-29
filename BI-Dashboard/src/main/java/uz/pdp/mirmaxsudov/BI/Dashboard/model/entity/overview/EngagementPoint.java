package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.overview;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_engagement")
public class EngagementPoint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Session duration in seconds
     */
    @Column(name = "session_duration_sec", nullable = false)
    private Integer sessionDurationSec;

    /**
     * Number of page views in that session
     */
    @Column(name = "page_views", nullable = false)
    private Integer pageViews;
}