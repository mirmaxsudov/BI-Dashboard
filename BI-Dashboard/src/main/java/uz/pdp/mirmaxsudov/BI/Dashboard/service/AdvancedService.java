package uz.pdp.mirmaxsudov.BI.Dashboard.service;

import org.springframework.stereotype.Service;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.response.advanced.AdvancedMetricDto;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.response.advanced.StockPriceRecordDto;
import uz.pdp.mirmaxsudov.BI.Dashboard.repository.advanced.AdvancedMetricRepository;
import uz.pdp.mirmaxsudov.BI.Dashboard.repository.advanced.StockPriceRecordRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdvancedService {
    private final StockPriceRecordRepository stockRepo;
    private final AdvancedMetricRepository metricRepo;

    public AdvancedService(
            StockPriceRecordRepository stockRepo,
            AdvancedMetricRepository metricRepo
    ) {
        this.stockRepo = stockRepo;
        this.metricRepo = metricRepo;
    }

    public List<StockPriceRecordDto> getAllStockPrices() {
        return stockRepo.findAll().stream()
                .map(r -> new StockPriceRecordDto(
                        r.getDate(), r.getOpenPrice(), r.getHighPrice(),
                        r.getLowPrice(), r.getClosePrice(), r.getVolume()))
                .collect(Collectors.toList());
    }

    public List<AdvancedMetricDto> getAllAdvancedMetrics() {
        return metricRepo.findAll().stream()
                .map(m -> new AdvancedMetricDto(
                        m.getMetricName(), m.getValue(), m.getUnit()))
                .collect(Collectors.toList());
    }
}
