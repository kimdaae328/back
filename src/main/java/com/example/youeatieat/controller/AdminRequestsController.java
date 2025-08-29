package com.example.youeatieat.controller;

import com.example.youeatieat.dto.AdminCustomerCriteriaDTO;
import com.example.youeatieat.dto.AdminRequestCriteriaDTO;
import com.example.youeatieat.dto.CustomerDetailWithPaymentDTO;
import com.example.youeatieat.service.AdminCustomerService;
import com.example.youeatieat.service.AdminRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/requests")
public class AdminRequestsController {
    private final AdminRequestService requestService;

    //    결제목록
    @GetMapping("/list/{page}")
    public ResponseEntity<?> list(@PathVariable("page") int page, @RequestParam(required = false) String keyword) {
        AdminRequestCriteriaDTO requestCriteriaDTO = requestService.getList(page, keyword);
        if(requestCriteriaDTO == null || requestCriteriaDTO.getRequests().size() == 0){
            return ResponseEntity.ok(requestCriteriaDTO);
        }
        return ResponseEntity.ok(requestCriteriaDTO);
    }

}
