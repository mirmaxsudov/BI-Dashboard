package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.analytics;

import jakarta.persistence.*;

@Entity
@Table(name = "user_flow_link")
public class UserFlowLink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String source;          // e.g., "Website"

    @Column(nullable = false)
    private String target;          // e.g., "Sign Up"

    @Column(nullable = false)
    private Integer count;          // number of users flowing from source to target

    // getters and setters
}