package uz.pdp.mirmaxsudov.BI.Dashboard.repository.advanced;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.advanced.StockPriceRecord;

@Repository
public interface StockPriceRecordRepository extends JpaRepository<StockPriceRecord, Long> {
}
