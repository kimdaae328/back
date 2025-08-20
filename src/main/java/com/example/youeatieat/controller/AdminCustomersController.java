package com.example.youeatieat.controller;

import com.example.youeatieat.dto.AdminCustomerCriteriaDTO;
import com.example.youeatieat.dto.CustomerDetailWithPaymentDTO;
import com.example.youeatieat.dto.MemberDTO;
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
@RequestMapping("/api/admin/customers")
public class AdminCustomersController {
    private final AdminCustomerService memberService;

//    회원목록
    @GetMapping("/list/{page}")
    public ResponseEntity<?> list(@PathVariable("page") int page) {
        AdminCustomerCriteriaDTO customerCriteriaDTO = memberService.getList(page);
        if(customerCriteriaDTO == null || customerCriteriaDTO.getCustomers().size() == 0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(customerCriteriaDTO);
        }
        return ResponseEntity.ok(customerCriteriaDTO);
    }

//    회원상세
    @GetMapping("/{id}")
    public ResponseEntity<?> detail(@PathVariable("id") Long id) {
        CustomerDetailWithPaymentDTO customerDetail = memberService.getCustomerDetail(id);
        if (customerDetail == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(customerDetail);
        }
        return ResponseEntity.ok(customerDetail);
    }

//    회원목록(일반회원)
    @GetMapping("/list/nonSubscribed/{page}")
    public ResponseEntity<?> nonSubscribedList(@PathVariable("page") int page) {
        AdminCustomerCriteriaDTO customerCriteriaDTO = memberService.getNonSubscribedList(page);
        if(customerCriteriaDTO == null || customerCriteriaDTO.getCustomers().size() == 0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(customerCriteriaDTO);
        }
        return ResponseEntity.ok(customerCriteriaDTO);
    }

//    회원목록(구독회원)
    @GetMapping("/list/subscribed/{page}")
    public ResponseEntity<?> subscribedList(@PathVariable("page") int page) {
        AdminCustomerCriteriaDTO customerCriteriaDTO = memberService.getSubscribedList(page);
        if(customerCriteriaDTO == null || customerCriteriaDTO.getCustomers().size() == 0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(customerCriteriaDTO);
        }
        return ResponseEntity.ok(customerCriteriaDTO);
    }

}
