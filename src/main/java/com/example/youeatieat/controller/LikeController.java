package com.example.youeatieat.controller;

import com.example.youeatieat.dto.LikeDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.service.LikeService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/like")
@RequiredArgsConstructor
@Slf4j
public class LikeController {
    private final LikeService likeService;
    private final HttpSession session;

    @GetMapping("/like-list")
    public String GoToLike(Model model){
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        List<LikeDTO> likes = likeService.getLikeListByMemberId(member.getId());
        model.addAttribute("likes",likes);
        log.info("likes={}", likes);
        return "/mypage/like-list";
    }
    @PostMapping("delete")
    public ResponseEntity<?> deleteLike(@RequestBody LikeDTO likeDTO) {
        likeService.unlike(likeDTO);
        return ResponseEntity.ok().body("success");
    }

}
