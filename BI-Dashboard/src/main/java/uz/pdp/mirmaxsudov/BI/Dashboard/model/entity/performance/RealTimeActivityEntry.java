package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.performance;

import jakarta.persistence.*;

import java.time.LocalDateTime;


@Entity
@Table(name = "real_time_activity")
public class RealTimeActivityEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "timestamp", nullable = false)
    private LocalDateTime timestamp;

    @Column(name = "active_users", nullable = false)
    private Integer activeUsers;
}