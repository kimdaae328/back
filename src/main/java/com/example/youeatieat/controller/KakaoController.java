package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.LoginFailException;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.enumeration.Provider;
import com.example.youeatieat.service.KakaoService;
import com.example.youeatieat.service.MemberService;
import com.example.youeatieat.service.MemberServiceImpl;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Optional;

@RequestMapping("/kakao")
@RequiredArgsConstructor
@Controller
@Slf4j
public class KakaoController {
    private final MemberService memberService;
    private final KakaoService kakaoService;
    private final HttpSession session;
    private final MemberServiceImpl memberServiceImpl;

    @GetMapping("login")
    public RedirectView kakaoLogin(String code, RedirectAttributes redirectAttributes){
        String token = kakaoService.getKakaoAccessToken(code);
        Optional<MemberDTO> foundMember = kakaoService.getKakaoInfo(token);
        MemberDTO member = foundMember.orElseThrow(RuntimeException::new);

        Optional<MemberDTO> foundKakaoMember = memberService.getKakaoMember(member.getMemberKakaoEmail());
       if(foundKakaoMember.isEmpty()) {
            redirectAttributes.addFlashAttribute("kakaoEmail", member.getMemberKakaoEmail());
            return new RedirectView("/kakao/signup");
        }
        session.setAttribute("member", foundKakaoMember.get());
        return new RedirectView("/");
    }

    @GetMapping("/signup")
    public String goToKakaoSignup(MemberDTO memberDTO, Model model) {
       model.addAttribute("memberDTO", memberDTO);
       return "/member/kakao-signup";
    }

    @PostMapping("/signup")
    public RedirectView kakaoSignup(MemberDTO memberDTO){
       memberDTO.setMemberProvider(Provider.KAKAO);
        memberService.joinKakao(memberDTO);
       Optional<MemberDTO> foundKakaoMember = memberService.getKakaoMember(memberDTO.getMemberKakaoEmail());
       session.setAttribute("member", foundKakaoMember.orElseThrow(LoginFailException::new));
       return new RedirectView("/");
    }
}

