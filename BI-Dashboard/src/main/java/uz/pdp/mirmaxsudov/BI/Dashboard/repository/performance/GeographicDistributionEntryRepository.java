package uz.pdp.mirmaxsudov.BI.Dashboard.repository.performance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.performance.GeographicDistributionEntry;

@Repository
public interface GeographicDistributionEntryRepository extends JpaRepository<GeographicDistributionEntry, Long> {
}