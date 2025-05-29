package uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.overview;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "sales_distribution_category")
public class SalesDistributionCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * e.g. "Direct", "Organic", "Social Media", etc.
     */
    @Column(nullable = false)
    private String category;

    /**
     * value or percentage for that slice
     */
    @Column(nullable = false)
    private BigDecimal value;

    // getters & setters...
}