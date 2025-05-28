package uz.pdp.mirmaxsudov.BI.Dashboard.repository.overview;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.overview.SalesDistributionCategory;

@Repository
public interface SalesDistributionCategoryRepository extends JpaRepository<SalesDistributionCategory, Long> {
}
