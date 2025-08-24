package com.example.youeatieat.controller;

import com.example.youeatieat.dto.AdminInquiryCriteriaDTO;
import com.example.youeatieat.dto.AdminPurchaseCriteriaDTO;
import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
import com.example.youeatieat.service.AdminInquiryService;
import com.example.youeatieat.service.AdminPurchaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/purchases")
public class AdminPurchaseController {
    private final AdminPurchaseService purchaseService;

//    문의 목록(전체)
    @GetMapping("list/{page}")
    public ResponseEntity<?> purchaseList(@PathVariable("page") int page) {
        AdminPurchaseCriteriaDTO purchaseCriteriaDTO = purchaseService.getPurchaseList(page);
        if(purchaseCriteriaDTO == null || purchaseCriteriaDTO.getPurchases().size() == 0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(purchaseCriteriaDTO);
        }
        return ResponseEntity.ok(purchaseCriteriaDTO);
    }

//    문의 상세
//    @GetMapping("/{id}")
//    public ResponseEntity<?> detail(@PathVariable("id") Long inquiryId) {
//        InquiryWithAnswerDTO inquiryDetail = purchaseService.getInquiryDetail(inquiryId);
//        if (inquiryDetail == null) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(inquiryDetail);
//        }
//        return ResponseEntity.ok(inquiryDetail);
//    }

}
