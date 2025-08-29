package com.example.youeatieat.controller;

import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.service.CartServiceImpl;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/carts/**")
@RequiredArgsConstructor
@Slf4j
public class CartApiController {
    private final CartServiceImpl cartService;
    private final HttpSession session;

    //
    @PostMapping("save")
    public ResponseEntity<?> insertCart(@RequestBody CartDTO cartDTO) {
        int cartCount = cartDTO.getCartCount();
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("member");
        cartDTO.setMemberId(memberDTO.getId());
        List<CartDTO> carts = cartService.getDuplicateProduct(cartDTO.getMemberId(),cartDTO.getProductId());
        if(!carts.isEmpty()){
            Long id = carts.get(0).getId();
            cartService.updateDuplicateProduct(id, cartDTO.getCartCount());
        }else {
            if (!(cartCount== 0)) {
                cartService.addCart(cartDTO);
            }
        }
        return ResponseEntity.ok().body(cartDTO);
    }

    @PostMapping("like/save")
    public ResponseEntity<?> likeListCartProduct(@RequestBody CartDTO cartDTO) {
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("member");
        cartDTO.setMemberId(memberDTO.getId());
        List<CartDTO> carts = cartService.getDuplicateProduct(cartDTO.getMemberId(),cartDTO.getProductId());
        if(!carts.isEmpty()){
            Long id = carts.get(0).getId();
            cartService.updateDuplicateProduct(id, 1);
        }else {
                cartService.addCart(cartDTO);
            }

        return ResponseEntity.ok(cartDTO);
    }

// 장바구니 수량 업데이트
    @PostMapping("/update")
    @ResponseBody
    public ResponseEntity<?> updateCount(@RequestBody Map<String, Integer> request){

        int count = request.get("cartCount");
        Long cartId = Long.valueOf(request.get("cartId"));
        cartService.updateCartCount(cartId,count);
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        List<CartDTO> list = cartService.getCartListByMemberId(member.getId());
        int totalPrice = list.stream()
                .mapToInt(cart -> cart.getProductPrice() * cart.getCartCount())
                .sum();
        Map<String, Object> response = new HashMap<>();
        response.put("cartId", cartId);
        response.put("cartCount", count);
        response.put("totalPrice", totalPrice);
        return ResponseEntity.ok(response);
    }

    // 장바구니 삭제

    @PostMapping("/delete")
    @ResponseBody
    public ResponseEntity<?> deleteCart(@RequestBody Map<String, String> request){

        Long cartId = Long.valueOf(request.get("cartId"));
        cartService.deleteCartByCartId(cartId);
        log.info("delete cart id is {}", cartId);
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        List<CartDTO> list = cartService.getCartListByMemberId(member.getId());
        int totalPrice = list.stream()
                .mapToInt(cart -> cart.getProductPrice() * cart.getCartCount())
                .sum();
        Map<String, Object> response = new HashMap<>();
        response.put("cartId", cartId);
        response.put("totalPrice", totalPrice);
        return ResponseEntity.ok(response);
    }

//    장바구니 선택 삭제
    @PostMapping("/select-delete")
    @ResponseBody
    public ResponseEntity<?> deleteSelectedCart(@RequestBody Map<String, List<Long>> request) {
        List<Long> cartIds = request.get("cartIds");
        cartIds.forEach(cartService::deleteCartByCartId);
        MemberDTO member = (MemberDTO) session.getAttribute("member");
        List<CartDTO> list = cartService.getCartListByMemberId(member.getId());
        int totalPrice = list.stream()
                .mapToInt(cart -> cart.getProductPrice() * cart.getCartCount())
                .sum();
        Map<String, Object> response = new HashMap<>();
        response.put("deletedIds", cartIds);
        response.put("totalPrice", totalPrice);

        return ResponseEntity.ok(response);
    }
}
