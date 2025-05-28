package uz.pdp.mirmaxsudov.BI.Dashboard.repository.performance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.performance.RealTimeActivityEntry;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface RealTimeActivityEntryRepository extends JpaRepository<RealTimeActivityEntry, Long> {
    List<RealTimeActivityEntry> findByTimestampAfterOrderByTimestampAsc(LocalDateTime cutoff);

    List<RealTimeActivityEntry> findTop100ByOrderByTimestampDesc();
}