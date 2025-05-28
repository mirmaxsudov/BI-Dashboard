package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.performance;

import uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.performance.GeographicDistributionEntry;

public class GeographicDistributionDto {
    public String region;
    public double percentage;

    public static GeographicDistributionDto from(GeographicDistributionEntry e) {
        GeographicDistributionDto d = new GeographicDistributionDto();
        d.region = e.getRegion();
        d.percentage = e.getPercentage();
        return d;
    }
}