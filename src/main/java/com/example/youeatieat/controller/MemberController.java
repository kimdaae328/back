package com.example.youeatieat.controller;

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
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static com.example.youeatieat.enumeration.MemberRole.ADMIN;

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
    public RedirectView login(MemberDTO memberDTO, RedirectAttributes redirectAttributes
                              ){
        Optional<MemberDTO> optionalMember = memberService.login(memberDTO);
        if (optionalMember.isEmpty()) {
            redirectAttributes.addFlashAttribute("loginError", "아이디 또는 비밀번호가 틀렸습니다.");
            return new RedirectView("/member/login");
        }
        MemberDTO member = optionalMember.get();
        session.setAttribute("member", member);
        if (member.getMemberRole() == ADMIN) {
        return new RedirectView("/admin/customer/list");
        }
        return new RedirectView("/");
    }
    @GetMapping("logout")
    public RedirectView logout(String token, HttpServletResponse response){
        if(token == null){
            session.invalidate();
        }else{
            kakaoService.logout(token);
        }
        return new RedirectView("/");
    }
}


