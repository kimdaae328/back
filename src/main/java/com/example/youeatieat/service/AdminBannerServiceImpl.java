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
public class AdminBannerServiceImpl implements AdminBannerService {
    private final AdminFileDAO fileDAO;
    private final AdminBannerDAO bannerDAO;
    private final AdminBannerFileDAO bannerFileDAO;

    @Override
    @Transactional
    public void uploadBannerFiles(BannerDTO bannerDTO, List<MultipartFile> files) {
        String todayPath = getPath();
        String rootPath = "C:/file/" + todayPath;

        files.forEach(file -> {
            if(file.getOriginalFilename().equals("")){
                return;
            }
            bannerDAO.upload(bannerDTO);
            Long bannerId = bannerDTO.getId();

            UUID uuid = UUID.randomUUID();

            FileDTO fileDTO = new FileDTO();

            fileDTO.setFileName(uuid.toString() + "_" + file.getOriginalFilename());
            fileDTO.setFileOriginalName(file.getOriginalFilename());
            fileDTO.setFilePath(todayPath);
            fileDTO.setFileSize(String.valueOf(file.getSize()));
            fileDTO.setFileContentType(file.getContentType());

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

//                썸네일 업로드
                if(file.getContentType().startsWith("image")) {
//                    UUID tUuid = new UUID(); // 원본 이미지의 UUID와 다르게 설정
                    FileOutputStream out = new FileOutputStream(new File(rootPath, "t_" + uuid.toString() + "_" + file.getOriginalFilename()));
                    Thumbnailator.createThumbnail(file.getInputStream(), out, 100, 100);
                    out.close();
                }

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

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteBannerFiles(Long bannerId) {
        List<BannerWithFileDTO> banners = bannerFileDAO.findFiles(bannerId);

        bannerFileDAO.delete(bannerId);

//        banners.forEach(file -> {
//            System.out.println("삭제하려는 fileId = " + file.getId());
//            fileDAO.delete(file.getId());
//        });

//        banners.forEach(file -> fileDAO.delete(file.getFileId()));
        bannerDAO.delete(bannerId);

//        banners.stream().map(bannerFile -> bannerFile.getBannerId()).forEach(bannerDAO::delete);

        banners.forEach((bannerFile) -> {

            fileDAO.delete(bannerFile.getFileId());

            File file = new File("C:/file/" + bannerFile.getFilePath(), bannerFile.getFileName());
            if(file.exists()){
                file.delete();
            }

            if(bannerFile.getFileContentType().startsWith("image")) {
                file = new File("C:/file/" + bannerFile.getFilePath(), "t_" + bannerFile.getFileName());
                if(file.exists()){
                    file.delete();
                }
            }
        });
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateBannerOrder(Long bannerId, int bannerOrder) {
        bannerDAO.updateOrder(bannerId, bannerOrder);
    }
}
