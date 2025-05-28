package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.performance;

import uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.performance.UserGrowthTrend;

public class UserGrowthTrendDto {
    public String month;
    public int userCount;

    public static UserGrowthTrendDto from(UserGrowthTrend e) {
        UserGrowthTrendDto d = new UserGrowthTrendDto();
        d.month = e.getMonth().name();
        d.userCount = e.getUserCount();
        return d;
    }
}