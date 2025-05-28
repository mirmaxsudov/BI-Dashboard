package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.performance;

import jakarta.persistence.*;
import lombok.Data;

import java.time.Month;

@Data
@Entity
@Table(name = "user_growth_trend")
public class UserGrowthTrend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Month month;

    @Column(name = "user_count", nullable = false)
    private Integer userCount;

    // getters & setters omitted for brevity
}