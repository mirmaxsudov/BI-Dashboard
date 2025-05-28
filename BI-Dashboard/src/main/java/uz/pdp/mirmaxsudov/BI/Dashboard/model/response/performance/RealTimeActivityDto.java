package uz.pdp.mirmaxsudov.BI.Dashboard.model.response.performance;

import uz.pdp.mirmaxsudov.BI.Dashboard.model.entity.performance.RealTimeActivityEntry;

public class RealTimeActivityDto {
    public String timestamp;
    public int activeUsers;

    public static RealTimeActivityDto from(RealTimeActivityEntry e) {
        RealTimeActivityDto d = new RealTimeActivityDto();
        d.timestamp = e.getTimestamp().toString();
        d.activeUsers = e.getActiveUsers();
        return d;
    }
}