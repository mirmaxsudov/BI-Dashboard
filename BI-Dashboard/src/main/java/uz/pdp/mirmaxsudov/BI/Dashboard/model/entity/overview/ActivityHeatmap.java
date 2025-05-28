package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.overview;

import jakarta.persistence.*;

@Entity
@Table(name = "activity_heatmap")
public class ActivityHeatmap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Day of week (e.g. 1=Monday…7=Sunday)
     */
    @Column(name = "day_of_week", nullable = false)
    private Integer dayOfWeek;

    /**
     * Hour of day (0–23)
     */
    @Column(name = "hour_of_day", nullable = false)
    private Integer hourOfDay;

    /**
     * Number of activities in that hour
     */
    @Column(name = "activity_count", nullable = false)
    private Integer activityCount;
}