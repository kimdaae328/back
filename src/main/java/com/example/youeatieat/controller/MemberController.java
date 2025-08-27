package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.LoginFailException;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.service.KakaoService;
import com.example.youeatieat.service.MemberService;
import jakarta.servlet.http.HttpServletResponse;
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
@RequestMapping("/member")
@RequiredArgsConstructor

public class MemberController {
    private final MemberService memberService;
    private final HttpSession session;
    private final KakaoService kakaoService;

    @GetMapping("signup")
    public String goToJoinForm(MemberDTO memberDTO, Model model) {
        model.addAttribute("memberDTO", memberDTO);
        return "member/signup";
    }
    @GetMapping("signup-guide")
    public String goToSingUpGuide(MemberDTO memberDTO, Model model) {
        model.addAttribute("memberDTO", memberDTO);
        return "/member/signup-guide";
    }

    @PostMapping("signup")
    public RedirectView join (MemberDTO memberDTO) {
        memberService.join(memberDTO);
        return new RedirectView("/member/login");
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
    public String goToLoginForm(MemberDTO memberDTO, Model model){
        model.addAttribute("memberDTO", memberDTO);
        return "/member/login";
    }

    @PostMapping("login")
    public RedirectView login(MemberDTO memberDTO){
        MemberDTO member = memberService.login(memberDTO).orElseThrow(LoginFailException::new);
        session.setAttribute("member", member);
        return new RedirectView("/");
    }
    @GetMapping("logout")
    public RedirectView logout(String token, HttpServletResponse response){
        if(token == null){
            session.invalidate();
        }else{
            kakaoService.logout(token);
        }
        return new RedirectView("/member/login");
    }
}


