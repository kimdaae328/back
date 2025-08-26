package com.example.youeatieat.controller;

import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.BannerFileDTO;
import com.example.youeatieat.dto.BannerWithFileDTO;
import com.example.youeatieat.dto.FileDTO;
import com.example.youeatieat.service.AdminBannerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/banners")
public class AdminBannersController {
    private final AdminBannerService bannerService;

    @PostMapping
    public ResponseEntity<?> uploadBanner(BannerDTO bannerDTO, @RequestParam("file") List<MultipartFile> files) {
        //확인
        log.info("bannerStatus = {}", bannerDTO.getBannerStatus());
//        log.info("bannerOrder  = {}", bannerDTO.getBannerOrder());

        files.forEach(file -> {
            if(!file.getOriginalFilename().equals("")){
                log.info(file.getOriginalFilename());
                log.info(file.getName());
            }
        });
////        List<FileDTO> result = bannerService.saveFile(files);
        bannerService.uploadBannerFiles(bannerDTO, files);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<?> list(){
        List<BannerWithFileDTO> bannerWithFileDTO = bannerService.getBannerFiles();
        if(bannerWithFileDTO == null || bannerWithFileDTO.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(bannerWithFileDTO);
        }
        return ResponseEntity.ok(bannerWithFileDTO);
    }

}
