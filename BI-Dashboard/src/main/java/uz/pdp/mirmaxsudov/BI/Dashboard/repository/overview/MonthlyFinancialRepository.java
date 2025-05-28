package uz.pdp.mirmaxsudov.BI.Dashboard.repository.overview;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.overview.MonthlyFinancial;

@Repository
public interface MonthlyFinancialRepository extends JpaRepository<MonthlyFinancial, Long> {
}