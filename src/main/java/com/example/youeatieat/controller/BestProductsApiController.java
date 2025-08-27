package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.NoProductException;
import com.example.youeatieat.dto.ProductCriteriaDTO;
import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.service.BestProductServiceImpl;
import com.example.youeatieat.service.ProductServiceImpl;
import com.example.youeatieat.util.Search;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/best-product/**")
@RequiredArgsConstructor
public class BestProductsApiController {
    private final BestProductServiceImpl bestProductService;

//    best 목록 뿌리기
    @PostMapping("/best-list/{page}")
    public ResponseEntity<?> getAllProducts(@PathVariable("page") int page,
                                            @RequestBody Search search) {


        ProductCriteriaDTO productCriteriaDTO = bestProductService.getList(page, search);
        int count = bestProductService.getCount(search);

        if (productCriteriaDTO == null || productCriteriaDTO.getProducts().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(productCriteriaDTO);
        }

        productCriteriaDTO.setTotalCount(count);
        return ResponseEntity.ok(productCriteriaDTO);
    }

}
