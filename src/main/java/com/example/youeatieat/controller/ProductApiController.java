package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.NoProductException;
import com.example.youeatieat.common.exception.handler.NotFoundReviewException;
import com.example.youeatieat.domain.ReviewImageVO;
import com.example.youeatieat.domain.ReviewVO;
import com.example.youeatieat.dto.*;
import com.example.youeatieat.service.*;
import com.example.youeatieat.util.Search;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;

@Slf4j
@RestController
@RequestMapping("/api/product/**")
@RequiredArgsConstructor
public class ProductApiController {

    private final ProductServiceImpl productService;

    //   이미지
    @GetMapping("image")
    public byte[] display(String filePath) throws IOException {
        return FileCopyUtils.copyToByteArray(new File("C:" + filePath));

    }


//    신상품 목록 뿌리기
    @PostMapping("/list/{page}")
    public ResponseEntity<?> getAllReviews(@PathVariable("page") int page,
                                           @RequestBody Search search) {
        log.info("search: {}", search);
        log.info("mainCategories: {}", search.getMainCategories());

        System.out.println("Mapper 호출 전 search.mainCategories = " + search.getMainCategories());
        System.out.println("Mapper 호출 전 search.priceKeyword = " + search.getPriceKeyword());

        ProductCriteriaDTO productCriteriaDTO = productService.getList(page, search);
        int count = productService.getCount(search);

        if (productCriteriaDTO == null || productCriteriaDTO.getProducts().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(productCriteriaDTO);
        }

        productCriteriaDTO.setTotalCount(count);
        return ResponseEntity.ok(productCriteriaDTO);
    }

    //    장바구니 담기로 이동
    @GetMapping("/{productId}")
    public ResponseEntity<?> goCartAddPage(@PathVariable Long productId) {
        Optional<ProductDTO> product = productService.goDetail(productId);

        return product.map(ResponseEntity::ok).orElseThrow(NoProductException::new);
    }

}
