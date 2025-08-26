package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.NoProductException;
import com.example.youeatieat.dto.ProductCriteriaDTO;
import com.example.youeatieat.dto.ProductDTO;
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
