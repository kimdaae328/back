package com.example.youeatieat.config;

import com.example.youeatieat.common.interceptor.SessionCheckInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new SessionCheckInterceptor())
                .addPathPatterns("/like/**")
                .addPathPatterns("/cart/**")
                .addPathPatterns("/request/**")
                .addPathPatterns("/mypage/**");

    }
}
