package com.example.youeatieat.service;

import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.BannerFileDTO;
import com.example.youeatieat.dto.BannerWithFileDTO;
import com.example.youeatieat.dto.FileDTO;
import com.example.youeatieat.repository.AdminBannerDAO;
import com.example.youeatieat.repository.AdminBannerFileDAO;
import com.example.youeatieat.repository.AdminFileDAO;
import lombok.RequiredArgsConstructor;
import net.coobird.thumbnailator.Thumbnailator;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AdminBannerServicelmpl implements AdminBannerService {
    private final AdminFileDAO fileDAO;
    private final AdminBannerDAO bannerDAO;
    private final AdminBannerFileDAO bannerFileDAO;

    @Override
    @Transactional
    public void uploadBannerFiles(BannerDTO bannerDTO, List<MultipartFile> files) {
        String todayPath = getPath();
        String rootPath = "C:/file/" + todayPath;

        bannerDAO.uploadBanner(bannerDTO);
        Long bannerId = bannerDTO.getId();

        files.forEach(file -> {
            if(file.getOriginalFilename().equals("")){
                return;
            }

            UUID uuid = UUID.randomUUID();

            FileDTO fileDTO = new FileDTO();

            fileDTO.setFileName(uuid.toString() + "_" + file.getOriginalFilename());
            fileDTO.setFileOriginalName(file.getOriginalFilename());
            fileDTO.setFilePath(todayPath);
            fileDTO.setFileSize(String.valueOf(file.getSize()));
//            fileDTO.setFileContentType(file.getContentType());

            fileDAO.save(fileDTO);
            Long fileId = fileDTO.getId();

//            bannerFileDAO.save(toBannerFileVO(bannerFileDTO));

            BannerFileDTO bannerFileDTO = new BannerFileDTO();
            bannerFileDTO.setBannerId(bannerId);
            bannerFileDTO.setFileId(fileId);
            bannerFileDAO.save(toBannerFileVO(bannerFileDTO));

            File directory = new File(rootPath);
            if(!directory.exists()){
                directory.mkdirs();
            }

            try {
//                원본 업로드
                file.transferTo(new File(rootPath, uuid.toString() + "_" + file.getOriginalFilename()));

            } catch (IOException e) {
                throw new RuntimeException(e);
            }

        });
    }

    @Override
    public List<BannerWithFileDTO> getBannerFiles() {
        List<BannerWithFileDTO> banners = bannerDAO.findBannerAll();
        return banners;
    }
}
