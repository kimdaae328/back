package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.LoginFailException;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.enumeration.Provider;
import com.example.youeatieat.service.KakaoService;
import com.example.youeatieat.service.MemberService;
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

   @GetMapping("login")
    public RedirectView kakaoLogin(String code, RedirectAttributes redirectAttributes){
        String token = kakaoService.getKakaoAccessToken(code);
//         return accessToken;
        Optional<MemberDTO> foundMember = kakaoService.getKakaoInfo(token);
//        거기서받아온토큰으로 DTO 리턴
        MemberDTO member = foundMember.orElseThrow(RuntimeException::new);
//       멤버에담음

        Optional<MemberDTO> foundKakaoMember = memberService.getKakaoMember(member.getKakaoEmail());
//        멤버의 카카오로이메일이 기존의 카카오이메일과 같은게있는지검사
        if(foundKakaoMember.isEmpty()) {
            redirectAttributes.addFlashAttribute("kakaoEmail", member.getKakaoEmail());
            return new RedirectView("/kakao/signup");
        }
        session.setAttribute("member", foundKakaoMember.get());

//      세션을받아서 메인으로 이동해야합니다
        return new RedirectView("/");
    }

    @GetMapping("/signup")
    public String goToKakaoSignup(MemberDTO memberDTO, Model model) {
       model.addAttribute("memberDTO", memberDTO);
       return "/member/kakao-signup";
    }

    @PostMapping("/signup")
    public RedirectView kakaoSignup(MemberDTO memberDTO){
       memberDTO.setProvider(Provider.KAKAO);
        memberService.joinKakao(memberDTO);
       Optional<MemberDTO> foundKakaoMember = memberService.getKakaoMember(memberDTO.getKakaoEmail());
       session.setAttribute("member", foundKakaoMember.orElseThrow(LoginFailException::new));
       return new RedirectView("/");
    }
}

