package uz.pdp.mirmaxsudov.BI.Dashboard.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry
                .addMapping("/**")           // apply to all paths
                .allowedOrigins("*")         // allow all origins
                .allowedMethods("*")         // allow GET, POST, PUT, DELETE, etc.
                .allowedHeaders("*")         // allow all headers
                .allowCredentials(false)     // or true if you need cookies/auth
                .maxAge(3600);               // cache preflight for 1 hour
    }
}