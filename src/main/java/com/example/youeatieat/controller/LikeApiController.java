package com.example.youeatieat.controller;

import com.example.youeatieat.dto.LikeDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.service.LikeServiceImpl;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/like/**")
@RequiredArgsConstructor
public class LikeApiController {
    private final LikeServiceImpl likeService;
    private final HttpSession session;

    //    찜하기
    @PostMapping("like")
    public ResponseEntity<?> likeProduct(@RequestBody LikeDTO likeDTO) {
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        likeDTO.setMemberId(member.getId());
        likeService.like(likeDTO);
        return ResponseEntity.ok().body(likeDTO);
    }

    //    찜 취소하기
    @PostMapping("unlike")
    public ResponseEntity<?> unlikeProduct(@RequestBody LikeDTO likeDTO) {
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        likeDTO.setMemberId(member.getId());
        likeService.unlike(likeDTO);
        return ResponseEntity.ok().body(likeDTO);
    }

    @GetMapping("list")
    public ResponseEntity<?> list() {
        MemberDTO member = (MemberDTO) session.getAttribute("member");

        List<LikeDTO> likes = likeService.getLikeListByMemberId(member.getId());

        return ResponseEntity.ok(likes);
    }

//    좋아요 상태 조회
    @GetMapping("status")
    public ResponseEntity<Boolean> getLikeStatus(@RequestParam("productId") Long productId) {
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        if (member == null) return ResponseEntity.ok(false);

        LikeDTO likeDTO = new LikeDTO();
        likeDTO.setMemberId(member.getId());
        likeDTO.setProductId(productId);

        boolean liked = likeService.getLike(likeDTO);
        return ResponseEntity.ok(liked);
    }

}
