package com.example.youeatieat.service;

import com.example.youeatieat.domain.BannerFileVO;
import com.example.youeatieat.domain.BannerVO;
import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.BannerFileDTO;
import com.example.youeatieat.dto.FileDTO;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

public interface AdminBannerService {
//    추가
    public void upload(BannerDTO bannerDTO, List<MultipartFile> files);

//    조회
    public List<BannerFileDTO> getBannerFiles();

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
