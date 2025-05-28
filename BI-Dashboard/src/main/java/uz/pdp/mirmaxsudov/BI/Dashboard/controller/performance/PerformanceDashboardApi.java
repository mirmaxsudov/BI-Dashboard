package uz.pdp.mirmaxsudov.BI.Dashboard.controller.performance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.response.performance.ChannelPerformanceMetricDto;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.response.performance.GeographicDistributionDto;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.response.performance.RealTimeActivityDto;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.response.performance.UserGrowthTrendDto;
import uz.pdp.mirmaxsudov.BI.Dashboard.repository.performance.ChannelPerformanceMetricRepository;
import uz.pdp.mirmaxsudov.BI.Dashboard.repository.performance.GeographicDistributionEntryRepository;
import uz.pdp.mirmaxsudov.BI.Dashboard.repository.performance.RealTimeActivityEntryRepository;
import uz.pdp.mirmaxsudov.BI.Dashboard.repository.performance.UserGrowthTrendRepository;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/performance")
public class PerformanceDashboardApi {

    private final ChannelPerformanceMetricRepository channelRepo;
    private final GeographicDistributionEntryRepository geoRepo;
    private final UserGrowthTrendRepository growthRepo;
    private final RealTimeActivityEntryRepository activityRepo;

    @Autowired
    public PerformanceDashboardApi(
            ChannelPerformanceMetricRepository channelRepo,
            GeographicDistributionEntryRepository geoRepo,
            UserGrowthTrendRepository growthRepo,
            RealTimeActivityEntryRepository activityRepo) {
        this.channelRepo = channelRepo;
        this.geoRepo = geoRepo;
        this.growthRepo = growthRepo;
        this.activityRepo = activityRepo;
    }

    /**
     * Returns key performance metrics across channels for the bar chart.
     */
    @GetMapping("/channels")
    public List<ChannelPerformanceMetricDto> getChannelMetrics() {
        return channelRepo.findAll()
                .stream()
                .map(ChannelPerformanceMetricDto::from)
                .collect(Collectors.toList());
    }

    /**
     * Returns geographic user distribution data for the donut chart.
     */
    @GetMapping("/geographic")
    public List<GeographicDistributionDto> getGeographicDistribution() {
        return geoRepo.findAll()
                .stream()
                .map(GeographicDistributionDto::from)
                .collect(Collectors.toList());
    }

    /**
     * Returns monthly user growth trend for the line chart.
     */
    @GetMapping("/user-growth")
    public List<UserGrowthTrendDto> getUserGrowth() {
        return growthRepo.findAllByOrderByMonthAsc()
                .stream()
                .map(UserGrowthTrendDto::from)
                .collect(Collectors.toList());
    }

    /**
     * Returns live user activity time series.
     */
    @GetMapping("/real-time-activity")
    public List<RealTimeActivityDto> getRealTimeActivity() {
        return activityRepo.findTop100ByOrderByTimestampDesc()  // custom query for recent time window
                .stream()
                .map(RealTimeActivityDto::from)
                .collect(Collectors.toList());
    }
}