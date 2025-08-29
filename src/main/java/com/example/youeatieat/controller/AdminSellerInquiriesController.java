package com.example.youeatieat.controller;

import com.example.youeatieat.dto.AdminInquiryCriteriaDTO;
import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
import com.example.youeatieat.service.AdminInquiryService;
import com.example.youeatieat.service.AdminSellerInquiryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/seller/inquiries")
public class AdminSellerInquiriesController {
    private final AdminSellerInquiryService inquiriesService;

//    문의 목록(전체)
    @GetMapping("list/{page}")
    public ResponseEntity<?> inquiryList(@PathVariable("page") int page, @RequestParam(required = false) String keyword) {
        AdminInquiryCriteriaDTO inquiryCriteriaDTO = inquiriesService.getInquiryList(page, keyword);
        if(inquiryCriteriaDTO == null || inquiryCriteriaDTO.getInquiries().size() == 0){
            return ResponseEntity.ok(inquiryCriteriaDTO);
        }
        return ResponseEntity.ok(inquiryCriteriaDTO);
    }

//    문의 목록(미답변)
    @GetMapping("list/unanswered/{page}")
    public ResponseEntity<?> unansweredList(@PathVariable("page") int page, @RequestParam(required = false) String keyword) {
        AdminInquiryCriteriaDTO inquiryCriteriaDTO = inquiriesService.getUnansweredList(page, keyword);
        if(inquiryCriteriaDTO == null || inquiryCriteriaDTO.getInquiries().size() == 0){
            return ResponseEntity.ok(inquiryCriteriaDTO);
        }
        return ResponseEntity.ok(inquiryCriteriaDTO);
    }

//    문의 목록(답변완료)
    @GetMapping("list/answered/{page}")
    public ResponseEntity<?> answeredList(@PathVariable("page") int page, @RequestParam(required = false) String keyword) {
        AdminInquiryCriteriaDTO inquiryCriteriaDTO = inquiriesService.getAnsweredList(page, keyword);
        if(inquiryCriteriaDTO == null || inquiryCriteriaDTO.getInquiries().size() == 0){
            return ResponseEntity.ok(inquiryCriteriaDTO);
        }
        return ResponseEntity.ok(inquiryCriteriaDTO);
    }

//    문의 상세
    @GetMapping("/{id}")
    public ResponseEntity<?> detail(@PathVariable("id") Long inquiryId) {
        InquiryWithAnswerDTO inquiryDetail = inquiriesService.getInquiryDetail(inquiryId);
        if (inquiryDetail == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(inquiryDetail);
        }
        return ResponseEntity.ok(inquiryDetail);

//        try {
//            InquiryDetailWithAnswerDTO dto = inquiriesService.getInquiryDetail(inquiryId);
//            return ResponseEntity.ok(dto);
//        } catch (NoSuchElementException e) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
//        } catch (IllegalArgumentException e) {
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
    }

//    문의 답변 등록
    @PostMapping("/{inquiryId}/answer")
    public ResponseEntity<?> inquiryAnswer(@PathVariable Long inquiryId, @RequestBody InquiryAnswerDTO inquiryAnswerDTO){
        inquiryAnswerDTO.setInquiryId(inquiryId);
        inquiriesService.writeInquiryAnswer(inquiryAnswerDTO);

        InquiryWithAnswerDTO updatedDetail = inquiriesService.getInquiryDetail(inquiryId);
//        return ResponseEntity.ok().body(inquiryAnswerDTO);
        return ResponseEntity.ok(updatedDetail);
    }

}
