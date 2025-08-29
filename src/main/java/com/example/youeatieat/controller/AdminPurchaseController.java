package com.example.youeatieat.controller;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.service.AdminInquiryService;
import com.example.youeatieat.service.AdminPurchaseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/purchases")
public class AdminPurchaseController {
    private final AdminPurchaseService purchaseService;

//    매입 목록(전체)
    @GetMapping("/list/{page}")
    public ResponseEntity<?> purchaseList(@PathVariable("page") int page, @RequestParam(required = false) String keyword) {
        AdminPurchaseCriteriaDTO purchaseCriteriaDTO = purchaseService.getPurchaseList(page, keyword);
        if(purchaseCriteriaDTO == null || purchaseCriteriaDTO.getPurchases().size() == 0){
            return ResponseEntity.ok(purchaseCriteriaDTO);
        }
        return ResponseEntity.ok(purchaseCriteriaDTO);
    }

//    매입 상세
    @GetMapping("/{purchaseId}")
    public ResponseEntity<?> detail(@PathVariable("purchaseId") Long purchaseId) {
        PurchaseRequestWithMemberDTO purchaseDetail = purchaseService.getPurchaseDetail(purchaseId);
        if (purchaseDetail == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(purchaseDetail);
        }
        return ResponseEntity.ok(purchaseDetail);
    }

//    매입 승인 완료 건수
    @GetMapping("/approved/count")
    public ResponseEntity<Integer> getApprovedCountAll() {
        int count = purchaseService.getApprovedCountAll();
        return ResponseEntity.ok(count);
    }

//    매입 승인 상태
    @PostMapping("/{id}/status")
    public ResponseEntity<Void> updateStatus(@PathVariable Long id, @RequestParam String status) {
        purchaseService.changeApprovedStatus(id, status);
        return ResponseEntity.ok().build();
    }
}
