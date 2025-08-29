package com.example.youeatieat.controller;

import com.example.youeatieat.dto.ProductCriteriaDTO;
import com.example.youeatieat.service.BestProductServiceImpl;
import com.example.youeatieat.service.CategoriesProductServiceImpl;
import com.example.youeatieat.service.CategoryServiceImpl;
import com.example.youeatieat.util.Search;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/category/**")
@RequiredArgsConstructor
public class ByCategoryProductsApiController {
    private final CategoriesProductServiceImpl categoriesProductService;

//    카테고리별 목록 뿌리기
    @PostMapping("/list/{page}/{id}")
    public ResponseEntity<?> getAllProducts(@PathVariable("page") int page,
                                            @PathVariable("id") Long id,
                                            @RequestBody Search search) {
        System.out.println(search);

        ProductCriteriaDTO products = categoriesProductService.getList(page, search, id);
        log.info("products: {}", products);
        int count = categoriesProductService.getCount(search, id);

        if (products == null || products.getProducts().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(products);
        }

        products.setTotalCount(count);
        return ResponseEntity.ok(products);
    }

}
