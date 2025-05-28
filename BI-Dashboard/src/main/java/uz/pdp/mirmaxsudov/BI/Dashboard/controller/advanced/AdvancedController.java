package uz.pdp.mirmaxsudov.BI.Dashboard.controller.advanced;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.response.advanced.AdvancedMetricDto;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.response.advanced.StockPriceRecordDto;
import uz.pdp.mirmaxsudov.BI.Dashboard.service.AdvancedService;

import java.util.List;

@RestController
@RequestMapping("/api/advanced")
public class AdvancedController {
    private final AdvancedService advancedService;

    public AdvancedController(AdvancedService advancedService) {
        this.advancedService = advancedService;
    }

    @GetMapping("/stock-prices")
    public List<StockPriceRecordDto> getStockPrices() {
        return advancedService.getAllStockPrices();
    }

    @GetMapping("/metrics")
    public List<AdvancedMetricDto> getAdvancedMetrics() {
        System.out.println("getAdvancedMetrics");
        return advancedService.getAllAdvancedMetrics();
    }
}
