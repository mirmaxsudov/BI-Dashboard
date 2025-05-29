package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.overview;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "goal_progress")
public class GoalProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Name of the goal (e.g. \"Revenue Target\")
     */
    @Column(name = "goal_name", nullable = false)
    private String goalName;

    /**
     * Progress percentage 0–100
     */
    @Column(nullable = false)
    private Double progress;

// Constructors, getters and setters
}