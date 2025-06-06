package uz.pdp.mirmaxsudov.BI.Dashboard.repository.analytics;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.analytics.ConversionFunnelStage;

@Repository
public interface ConversionFunnelStageRepository extends JpaRepository<ConversionFunnelStage, Long> {
}