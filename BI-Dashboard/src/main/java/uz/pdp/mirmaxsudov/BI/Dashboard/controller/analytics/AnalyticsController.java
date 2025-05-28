package uz.pdp.mirmaxsudov.BI.Dashboard.controller.analytics;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.response.analytics.*;
import uz.pdp.mirmaxsudov.BI.Dashboard.repository.analytics.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/analytics")
public class AnalyticsController {
    private final TrafficSourceRepository trafficRepo;
    private final ConversionFunnelStageRepository funnelRepo;
    private final MarketTreemapSegmentRepository treemapRepo;
    private final RevenueWaterfallItemRepository waterfallRepo;
    private final UserFlowLinkRepository flowRepo;
    private final EngagementBubbleRepository bubbleRepo;

    @GetMapping("/traffic-sources")
    public List<TrafficSourceDto> getTrafficSources() {
        return trafficRepo.findAll().stream()
                .map(e -> new TrafficSourceDto(e.getSourceName(), e.getVisitors()))
                .collect(Collectors.toList());
    }

    @GetMapping("/conversion-funnel")
    public List<ConversionFunnelStageDto> getConversionFunnel() {
        return funnelRepo.findAll().stream()
                .map(e -> new ConversionFunnelStageDto(e.getStageName(), e.getCount(), e.getSequenceOrder()))
                .collect(Collectors.toList());
    }

    @GetMapping("/market-treemap")
    public List<MarketTreemapSegmentDto> getMarketTreemap() {
        return treemapRepo.findAll().stream()
                .map(e -> new MarketTreemapSegmentDto(e.getSegmentName(), e.getValue()))
                .collect(Collectors.toList());
    }

    @GetMapping("/revenue-waterfall")
    public List<RevenueWaterfallItemDto> getRevenueWaterfall() {
        return waterfallRepo.findAll().stream()
                .map(e -> new RevenueWaterfallItemDto(e.getItemName(), e.getAmount(), e.getDisplayOrder()))
                .collect(Collectors.toList());
    }

    @GetMapping("/user-flow")
    public List<UserFlowLinkDto> getUserFlow() {
        return flowRepo.findAll().stream()
                .map(e -> new UserFlowLinkDto(e.getSource(), e.getTarget(), e.getCount()))
                .collect(Collectors.toList());
    }

    @GetMapping("/engagement-bubble")
    public List<EngagementBubblePointDto> getEngagementBubble() {
        return bubbleRepo.findAll().stream()
                .map(e -> new EngagementBubblePointDto(e.getSegmentName(), e.getXValue(), e.getYValue(), e.getSizeValue()))
                .collect(Collectors.toList());
    }
}