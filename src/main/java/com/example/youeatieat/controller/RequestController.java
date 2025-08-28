package com.example.youeatieat.controller;

import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.dto.CartRequestDTO;
import com.example.youeatieat.service.CartServiceImpl;
import com.example.youeatieat.service.RequestServiceImpl;
import com.example.youeatieat.util.MypageSearch;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/request/**")
@Slf4j
public class RequestController {
    private final RequestServiceImpl requestService;
    private final CartServiceImpl cartService;
    @GetMapping("list/{page}")
    public String list(@PathVariable int page, Model model, MypageSearch search){
        if(search.getMonth() != null && search.getMonth().isEmpty()){
            search.setMonth(null);
        }
        model.addAttribute("requestsCriteriaDTO", requestService.getList(page, search));
        log.info("requestsCriteriaDTO = {}", requestService.getList(page, search));
        model.addAttribute("search", search);
        return "/mypage/request";
    }

    @PostMapping("/cart")
    public ResponseEntity<?> addToCart(@RequestBody CartRequestDTO dto) {
        List<CartDTO> carts = cartService.getDuplicateProduct(dto.getMemberId(),dto.getProductId());
        if(!carts.isEmpty()){
            Long id = carts.get(0).getId();
            cartService.updateDuplicateProduct(id, dto.getCount());
        }else {
            if (!(dto.getCount()==0)) {
                CartDTO cartDTO = new CartDTO();
                cartDTO.setMemberId(dto.getMemberId());
                cartDTO.setProductId(dto.getProductId());
                cartDTO.setCartCount(dto.getCount());
                cartService.addCart(cartDTO);
            }
        }

        return ResponseEntity.ok(dto);
    }
}
