package uz.pdp.mirmaxsudov.BI.Dashboard.controller.advanced;

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

    /**
     * GET /api/advanced/stock-prices
     * Returns all stock price records for candlestick chart
     */
    @GetMapping("/stock-prices")
    public List<StockPriceRecordDto> getStockPrices() {
        return advancedService.getAllStockPrices();
    }

    /**
     * GET /api/advanced/metrics
     * Returns key metrics (Uptime, API Calls, Avg Response, Success Rate)
     */
    @GetMapping("/metrics")
    public List<AdvancedMetricDto> getAdvancedMetrics() {
        return advancedService.getAllAdvancedMetrics();
    }
}
