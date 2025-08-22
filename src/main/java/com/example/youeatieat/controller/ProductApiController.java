package com.example.youeatieat.controller;

import com.example.youeatieat.common.exception.handler.NotFoundReviewException;
import com.example.youeatieat.domain.ReviewImageVO;
import com.example.youeatieat.domain.ReviewVO;
import com.example.youeatieat.dto.*;
import com.example.youeatieat.service.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/product/**")
@RequiredArgsConstructor
public class ProductApiController {

//   이미지
    @GetMapping("image")
    public byte[] display(String filePath) throws IOException {
        return FileCopyUtils.copyToByteArray(new File("C:/gb_0900_icm/you-eat-i-eat/you-eat-i-eat/src/main/resources/static" + filePath));
    }

}
