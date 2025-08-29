package com.example.youeatieat.controller;

import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.dto.ProductInquiryAnswerDTO;
import com.example.youeatieat.dto.ProductInquiryCriteriaDTO;
import com.example.youeatieat.dto.ProductInquiryDTO;
import com.example.youeatieat.service.MemberService;
import com.example.youeatieat.service.ProductInquiryAnswerServiceImpl;
import com.example.youeatieat.service.ProductInquiryServiceImpl;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inquiry/**")
@RequiredArgsConstructor
public class InquiriesApiController {
    private final ProductInquiryServiceImpl productInquiryService;
    private final ProductInquiryAnswerServiceImpl productInquiryAnswerService;
    private final HttpSession session;

    //    상품 문의하기
    @PostMapping("/to")
    public ResponseEntity<?> inquiryProduct(@RequestBody ProductInquiryDTO productInquiryDTO) {
        MemberDTO memberDTO = (MemberDTO) session.getAttribute("member");
        productInquiryDTO.setMemberId(memberDTO.getId());
        productInquiryService.toInquire(productInquiryDTO);
        return ResponseEntity.ok().body(productInquiryDTO);
    }

    //  문의 목록
    @GetMapping("/{productId}/inquiry/{page}")
    public ResponseEntity<?> getAllInquiries(@PathVariable("productId") Long productId, @PathVariable("page") int page) {
        ProductInquiryCriteriaDTO productInquiryCriteriaDTO = productInquiryService.getProductInquiryAll(page, productId);
        if (productInquiryCriteriaDTO == null || productInquiryCriteriaDTO.getProductInquiries().size() == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(productInquiryCriteriaDTO);
        }

        return ResponseEntity.ok(productInquiryCriteriaDTO);

    }

    //    문의 답변
    @GetMapping("/{inquiryId}/answer")
    public ResponseEntity<?> getAnswerByInquiryId(@PathVariable Long inquiryId) {
        List<ProductInquiryAnswerDTO> answer = productInquiryAnswerService.selectAnswerById(inquiryId);
        return ResponseEntity.ok().body(answer);
    }

}
