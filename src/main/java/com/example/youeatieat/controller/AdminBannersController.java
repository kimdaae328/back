package com.example.youeatieat.controller;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.service.AdminBannerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
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
//        log.info("bannerOrder  = {}", bannerDTO.getBannerOrder());

        files.forEach(file -> {
            if(!file.getOriginalFilename().equals("")){
                log.info(file.getOriginalFilename());
                log.info(file.getName());
            }
        });
////        List<FileDTO> result = bannerService.saveFile(files);
        bannerService.uploadBannerFiles(bannerDTO, files);
        return ResponseEntity.ok(bannerDTO);
    }

    @GetMapping
    public ResponseEntity<?> list(){
        List<BannerWithFileDTO> bannerWithFileDTO = bannerService.getBannerFiles();
        if(bannerWithFileDTO == null || bannerWithFileDTO.size() == 0){
            return ResponseEntity.ok(Collections.emptyList());
        }
        return ResponseEntity.ok(bannerWithFileDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        bannerService.deleteBannerFiles(id);

        return ResponseEntity.ok(id + "번 댓글 삭제");
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrder(@PathVariable("id") Long bannerId, @RequestBody BannerWithFileDTO bannerWithFileDTO){
        bannerService.updateBannerOrder(bannerId, bannerWithFileDTO.getBannerOrder());
//        if(!result){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(result);
//        }
//        return ResponseEntity.ok(result);

//        return result ? ResponseEntity.ok("순서 변경 성공!!!!!!!!!!!!!!!!!!!!-----------")
//                : ResponseEntity.status(HttpStatus.NOT_FOUND).body("순서 변경 실패!!!!!!!!!!!-----------");
        return ResponseEntity.ok(bannerWithFileDTO);
    }

}
