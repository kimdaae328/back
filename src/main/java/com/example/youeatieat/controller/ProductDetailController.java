package com.example.youeatieat.controller;

import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.dto.LikeDTO;
import com.example.youeatieat.service.ProductDetailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/product/**")
@RequiredArgsConstructor
public class ProductDetailController {
    private final ProductDetailService productDetailService;

//    상세 이동
    @GetMapping("/like")
    public ResponseEntity<?> checkLike(@RequestParam LikeDTO likeDTO) {
        likeDTO.setMemberId(2L);
        log.info("memberId: {}", likeDTO.getMemberId());
        boolean liked =  productDetailService.getLike(likeDTO);
        return ResponseEntity.ok(Map.of("liked", liked));
    }


    //    장바구니 넣기
    @PostMapping("carts/save")
    public ResponseEntity<?> insertCart(@RequestBody CartDTO cartDTO) {
        int cartCount = cartDTO.getCartCount();
        if (!(cartCount == 0)) {
            productDetailService.addCart(cartDTO);
        }

        return ResponseEntity.ok().body(cartDTO);
    }

//    찜하기
    @PostMapping("like")
    public ResponseEntity<?> likeProduct(@RequestBody LikeDTO likeDTO) {
        productDetailService.like(likeDTO);
        return ResponseEntity.ok().body(likeDTO);
    }

//    찜 취소하기
    @PostMapping("unlike")
    public ResponseEntity<?> unlikeProduct(@RequestBody LikeDTO likeDTO) {
        likeDTO.setMemberId(2L);
        productDetailService.unlike(likeDTO);
        return ResponseEntity.ok().body(likeDTO);
    }


}
