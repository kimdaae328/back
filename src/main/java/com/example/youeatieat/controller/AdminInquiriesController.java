package com.example.youeatieat.controller;

import com.example.youeatieat.dto.AdminInquiryCriteriaDTO;
import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryDetailWithAnswerDTO;
import com.example.youeatieat.service.AdminInquiryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/inquiries")
public class AdminInquiriesController {
    private final AdminInquiryService inquiriesService;
    private final InquiryDetailWithAnswerDTO inquiryDetailWithAnswerDTO;

    //    문의 목록
    @GetMapping("list/{page}")
    public ResponseEntity<?> inquiryList(@PathVariable("page") int page) {
        AdminInquiryCriteriaDTO inquiryCriteriaDTO = inquiriesService.getInquiryList(page);
        if(inquiryCriteriaDTO == null || inquiryCriteriaDTO.getInquiries().size() == 0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(inquiryCriteriaDTO);
        }
        return ResponseEntity.ok(inquiryCriteriaDTO);
    }

//    문의 상세
    @GetMapping("/{id}")
    public ResponseEntity<?> detail(@PathVariable("id") Long inquiryId) {
        InquiryDetailWithAnswerDTO inquiryDetail = inquiriesService.getInquiryDetail(inquiryId);
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

        InquiryDetailWithAnswerDTO updatedDetail = inquiriesService.getInquiryDetail(inquiryId);
//        return ResponseEntity.ok().body(inquiryAnswerDTO);
        return ResponseEntity.ok(updatedDetail);
    }

}
