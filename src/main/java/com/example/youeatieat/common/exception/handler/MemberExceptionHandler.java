package com.example.youeatieat.common.exception.handler;

import com.example.youeatieat.common.exception.LoginFailException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@ControllerAdvice(basePackages = "com.example.youeatieat.controller")
public class MemberExceptionHandler {
    @ExceptionHandler(LoginFailException.class)
    protected RedirectView handleTestExeption(LoginFailException e, RedirectAttributes redirectAttributes) {
        redirectAttributes.addFlashAttribute("login","fail");
        return new RedirectView("/main/body");}

}
