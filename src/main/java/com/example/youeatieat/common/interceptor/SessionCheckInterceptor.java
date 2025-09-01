package com.example.youeatieat.common.interceptor;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;

@Slf4j
public class SessionCheckInterceptor implements HandlerInterceptor {

    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Object member = request.getSession().getAttribute("member");
        if (member == null) {
            response.sendRedirect("/member/login");
            return false;
        }
        return true;
    }
}
