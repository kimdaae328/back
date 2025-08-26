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

    default String getPath(){
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }
}
