package uz.pdp.mirmaxsudov.BI.Dashboard.repository.performance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.performance.UserGrowthTrend;

import java.util.List;

@Repository
public interface UserGrowthTrendRepository extends JpaRepository<UserGrowthTrend, Long> {
    List<UserGrowthTrend> findAllByOrderByMonthAsc();
}
