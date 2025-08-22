package com.example.youeatieat.controller;

import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.dto.LikeDTO;
import com.example.youeatieat.service.CartServiceImpl;
import com.example.youeatieat.service.LikeServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/like/**")
@RequiredArgsConstructor
public class LikeApiController {
    private final LikeServiceImpl likeService;

    //    찜하기
    @PostMapping("like")
    public ResponseEntity<?> likeProduct(@RequestBody LikeDTO likeDTO) {
        likeDTO.setMemberId(2L);
        likeService.like(likeDTO);
        return ResponseEntity.ok().body(likeDTO);
    }

    //    찜 취소하기
    @PostMapping("unlike")
    public ResponseEntity<?> unlikeProduct(@RequestBody LikeDTO likeDTO) {
        likeDTO.setMemberId(2L);
        likeService.unlike(likeDTO);
        return ResponseEntity.ok().body(likeDTO);
    }

}
