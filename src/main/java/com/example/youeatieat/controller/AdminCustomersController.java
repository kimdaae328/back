package com.example.youeatieat.controller;

import com.example.youeatieat.dto.AdminCustomerCriteriaDTO;
import com.example.youeatieat.service.AdminCustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/customers/list")
public class AdminCustomersController {
    private final AdminCustomerService memberService;

//    회원목록
    @GetMapping("/{page}")
    public ResponseEntity<?> list(@PathVariable("page") int page) {
        AdminCustomerCriteriaDTO customerCriteriaDTO = memberService.getList(page);
        if(customerCriteriaDTO == null || customerCriteriaDTO.getCustomers().size() == 0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(customerCriteriaDTO);
        }
        return ResponseEntity.ok(customerCriteriaDTO);
    }
}
