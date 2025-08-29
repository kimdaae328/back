package com.example.youeatieat.controller;

import com.example.youeatieat.dto.AdminSellerCriteriaDTO;
import com.example.youeatieat.dto.CustomerDetailWithPurchaseDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.service.AdminSellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/sellers")
public class AdminSellersController {
    private final AdminSellerService memberService;

//    회원목록
    @GetMapping("/list/{page}")
    public ResponseEntity<?> list(@PathVariable("page") int page, @RequestParam(required = false) String keyword) {
        AdminSellerCriteriaDTO sellerCriteriaDTO = memberService.getSellerList(page, keyword);
        if(sellerCriteriaDTO == null || sellerCriteriaDTO.getSellers().size() == 0){
            return ResponseEntity.ok(sellerCriteriaDTO);
        }
        return ResponseEntity.ok(sellerCriteriaDTO);
    }

//    회원상세
    @GetMapping("/{id}")
    public ResponseEntity<?> detail(@PathVariable("id") Long id) {
        CustomerDetailWithPurchaseDTO sellerDetail = memberService.getSellerDetail(id);
        if (sellerDetail == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(sellerDetail);
        }
        return ResponseEntity.ok(sellerDetail);
    }

//    회원목록(일반)
    @GetMapping("/list/youeatieat/{page}")
    public ResponseEntity<?> youeatieatList(@PathVariable("page") int page, @RequestParam(required = false) String keyword) {
        AdminSellerCriteriaDTO sellerCriteriaDTO = memberService.getSellerYoueatieatList(page, keyword);
        if(sellerCriteriaDTO == null || sellerCriteriaDTO.getSellers().size() == 0){
            return ResponseEntity.ok(sellerCriteriaDTO);
        }
        return ResponseEntity.ok(sellerCriteriaDTO);
    }


    //    회원목록(카카오)
    @GetMapping("/list/kakao/{page}")
    public ResponseEntity<?> kakaoList(@PathVariable("page") int page, @RequestParam(required = false) String keyword) {
        AdminSellerCriteriaDTO sellerCriteriaDTO = memberService.getSellerKakaoList(page, keyword);
        if(sellerCriteriaDTO == null || sellerCriteriaDTO.getSellers().size() == 0){
            return ResponseEntity.ok(sellerCriteriaDTO);
        }
        return ResponseEntity.ok(sellerCriteriaDTO);
    }

}
