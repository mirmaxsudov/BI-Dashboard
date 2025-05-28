package uz.pdp.mirmaxsudov.BI.Dashboard.controller.Reports;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uz.pdp.mirmaxsudov.BI.Dashboard.model.response.report.ReportMetricDTO;
import uz.pdp.mirmaxsudov.BI.Dashboard.repository.Reports.AnnualSummaryMetricRepository;
import uz.pdp.mirmaxsudov.BI.Dashboard.repository.Reports.MonthlyReportMetricRepository;
import uz.pdp.mirmaxsudov.BI.Dashboard.repository.Reports.QuarterlyTrendMetricRepository;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/api/reports")
public class ReportsController {

    private final MonthlyReportMetricRepository monthlyRepo;
    private final QuarterlyTrendMetricRepository quarterlyRepo;
    private final AnnualSummaryMetricRepository annualRepo;

    @GetMapping("/monthly")
    public List<ReportMetricDTO> getMonthlyReportMetrics() {
        return monthlyRepo.findAll().stream()
                .map(m -> new ReportMetricDTO(m.getMetricName(), m.getValue()))
                .collect(Collectors.toList());
    }

    @GetMapping("/quarterly")
    public List<ReportMetricDTO> getQuarterlyTrendMetrics() {
        return quarterlyRepo.findAll().stream()
                .map(q -> new ReportMetricDTO(q.getTrendName(), q.getValue()))
                .collect(Collectors.toList());
    }

    @GetMapping("/annual")
    public List<ReportMetricDTO> getAnnualSummaryMetrics() {
        return annualRepo.findAll().stream()
                .map(a -> new ReportMetricDTO(a.getSummaryName(), a.getValue()))
                .collect(Collectors.toList());
    }
}