package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.LoginFailException;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Controller
@RequestMapping("/main/**")
@RequiredArgsConstructor

public class MemberController {
    private final MemberService memberService;
    private final HttpSession session;

    @GetMapping("signup")
    public String goToJoinForm(MemberDTO memberDTO, Model model) {
        model.addAttribute("memberDTO", memberDTO);
        return "/main/signup";
    }

    @PostMapping("signup")
    public RedirectView join (MemberDTO memberDTO) {
        log.info("{}",memberDTO);
        memberService.join(memberDTO);

//        생일 성별 남음.
        return new RedirectView("/main/login");
    }
    @PostMapping("check-email")
    @ResponseBody
    public ResponseEntity<?> checkEmail(@RequestBody Map<String, String> member){
        String memberEmail = member.get("memberEmail");
        boolean isExist = memberService.isExistMemberEmail(memberEmail);
        Map<String, Object> result = new HashMap<>();
        result.put("memberEmail", memberEmail);
        result.put("isExist", isExist);

        if(isExist){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(result);
        }
        return ResponseEntity.ok().body(result);
    }
    @GetMapping("login")
    public String goToLoginForm(MemberDTO MemberDTO, Model model) {
        model.addAttribute("memberDTO", MemberDTO);
        return "/main/login";
    }
    @PostMapping("login")
    public RedirectView login(MemberDTO memberDTO) {
        MemberDTO member =memberService.login(memberDTO).orElseThrow(LoginFailException::new);
        session.setAttribute("member",member);
        return new RedirectView("/mypage/cart");
    }
}
