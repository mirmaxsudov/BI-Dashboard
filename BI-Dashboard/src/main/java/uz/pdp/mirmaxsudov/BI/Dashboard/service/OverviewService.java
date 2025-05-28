package uz.pdp.mirmaxsudov.BI.Dashboard.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.response.overview.*;
import uz.pdp.mirmaxsudov.BI.Dashboard.repository.overview.*;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OverviewService {
    private final KpiMetricRepository kpiRepo;
    private final MonthlyFinancialRepository monthlyRepo;
    private final SalesDistributionCategoryRepository salesRepo;
    private final RadarMetricRepository radarRepo;
    private final EngagementPointRepository engagementRepo;
    private final GaugeMetricRepository gaugeRepo;
    private final GoalProgressRepository goalRepo;
    private final ActivityHeatmapRepository heatmapRepo;

    public List<KpiMetricDto> getKpiMetrics() {
        return kpiRepo.findAll().stream()
                .map(e -> new KpiMetricDto(e.getName(), e.getValue(), e.getChangePercent(), e.getPositiveChange()))
                .collect(Collectors.toList());
    }

    public List<MonthlyFinancialDto> getMonthlyFinancials() {
        return monthlyRepo.findAll().stream()
                .map(e -> new MonthlyFinancialDto(e.getMonth(), e.getRevenue(), e.getProfit()))
                .collect(Collectors.toList());
    }

    public List<SalesDistributionCategoryDto> getSalesDistribution() {
        return salesRepo.findAll().stream()
                .map(e -> new SalesDistributionCategoryDto(e.getCategory(), e.getValue()))
                .collect(Collectors.toList());
    }

    public List<RadarMetricDto> getRadarMetrics() {
        return radarRepo.findAll().stream()
                .map(e -> new RadarMetricDto(e.getDimension(), e.getBaselineValue(), e.getCurrentValue()))
                .collect(Collectors.toList());
    }

    public List<EngagementPointDto> getEngagementPoints() {
        return engagementRepo.findAll().stream()
                .map(e -> new EngagementPointDto(e.getId(), e.getSessionDurationSec(), e.getPageViews()))
                .toList();
    }

    public GaugeMetricDto getLatestGaugeMetric() {
        return gaugeRepo.findAll().stream()
                .max((a, b) -> a.getId().compareTo(b.getId()))
                .map(g -> new GaugeMetricDto(g.getId(), g.getValue()))
                .orElse(null);
    }

    public List<GoalProgressDto> getAllGoalProgress() {
        return goalRepo.findAll().stream()
                .map(g -> new GoalProgressDto(g.getId(), g.getGoalName(), g.getProgress()))
                .toList();
    }

    public List<ActivityHeatmapDto> getAllActivityHeatmap() {
        return heatmapRepo.findAll().stream()
                .map(h -> new ActivityHeatmapDto(h.getId(), h.getDayOfWeek(), h.getHourOfDay(), h.getActivityCount()))
                .toList();
    }
}