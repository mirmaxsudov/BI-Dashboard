package uz.pdp.mirmaxsudov.BI.Dashboard.controller.overview;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.response.overview.*;
import uz.pdp.mirmaxsudov.BI.Dashboard.service.OverviewService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/overview")
public class OverviewController {
    private final OverviewService overviewService;

    @GetMapping("/kpis")
    public List<KpiMetricDto> fetchKpis() {
        return overviewService.getKpiMetrics();
    }

    @GetMapping("/monthly-financials")
    public List<MonthlyFinancialDto> fetchMonthlyFinancials() {
        return overviewService.getMonthlyFinancials();
    }

    @GetMapping("/sales-distribution")
    public List<SalesDistributionCategoryDto> fetchSalesDistribution() {
        return overviewService.getSalesDistribution();
    }

    @GetMapping("/radar-metrics")
    public List<RadarMetricDto> fetchRadarMetrics() {
        return overviewService.getRadarMetrics();
    }

    @GetMapping("/engagement")
    public List<EngagementPointDto> getEngagement() {
        return overviewService.getEngagementPoints();
    }

    @GetMapping("/gauge")
    public GaugeMetricDto getGauge() {
        return overviewService.getLatestGaugeMetric();
    }

    @GetMapping("/goals")
    public List<GoalProgressDto> getGoals() {
        return overviewService.getAllGoalProgress();
    }

    @GetMapping("/heatmap")
    public List<ActivityHeatmapDto> getHeatmap() {
        return overviewService.getAllActivityHeatmap();
    }
}