package com.example.youeatieat.service;

import com.example.youeatieat.domain.BannerFileVO;
import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.BannerFileDTO;
import com.example.youeatieat.dto.BannerWithFileDTO;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

public interface AdminBannerService {
//    추가
    public void uploadBannerFiles(BannerDTO bannerDTO, List<MultipartFile> files);

//    조회
    public List<BannerWithFileDTO> getBannerFiles();

//    삭제
    public void deleteBannerFiles(Long id);

//    순서 수정
    public void updateBannerOrder(Long bannerId, int bannerOrder);

    default String getPath(){
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }

    default BannerFileVO toBannerFileVO(BannerFileDTO bannerFileDTO){
        return BannerFileVO.builder()
            .id(bannerFileDTO.getId())
            .bannerId(bannerFileDTO.getBannerId())
            .fileId(bannerFileDTO.getFileId())
            .build();
    }
}
