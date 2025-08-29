package com.example.youeatieat.controller;

import com.example.youeatieat.dto.AdminCustomerCriteriaDTO;
import com.example.youeatieat.dto.AdminProductCriteriaDTO;
import com.example.youeatieat.dto.CustomerDetailWithPaymentDTO;
import com.example.youeatieat.service.AdminCustomerService;
import com.example.youeatieat.service.AdminProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/products")
public class AdminProductsController {
    private final AdminProductService productService;

//    회원목록
    @GetMapping("/list/{page}")
    public ResponseEntity<?> list(@PathVariable("page") int page, @RequestParam(required = false) String keyword) {
        AdminProductCriteriaDTO productCriteriaDTO = productService.getList(page, keyword);
        if(productCriteriaDTO == null || productCriteriaDTO.getProducts().size() == 0){
            return ResponseEntity.ok(productCriteriaDTO);
        }
        return ResponseEntity.ok(productCriteriaDTO);
    }


}
