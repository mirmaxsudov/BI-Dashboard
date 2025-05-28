package uz.pdp.mirmaxsudov.BI.Dashboard.repository.Reports;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.Reports.QuarterlyTrendMetric;

@Repository
public interface QuarterlyTrendMetricRepository extends JpaRepository<QuarterlyTrendMetric, Long> {
}