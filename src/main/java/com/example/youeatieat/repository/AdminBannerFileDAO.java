package com.example.youeatieat.repository;

import com.example.youeatieat.domain.BannerFileVO;
import com.example.youeatieat.dto.BannerFileDTO;
import com.example.youeatieat.dto.BannerWithFileDTO;
import com.example.youeatieat.dto.FileDTO;
import com.example.youeatieat.mapper.AdminBannerFileMapper;
import com.example.youeatieat.mapper.AdminBannerMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminBannerFileDAO {
    private final AdminBannerFileMapper bannerFileMapper;

//    추가
    public void save(BannerFileVO bannerFileVO) {
        bannerFileMapper.insertBannerFile(bannerFileVO);
    }

//    삭제
    public void delete(Long bannerId) {
        bannerFileMapper.deleteBannerFile(bannerId);
    }

//    파일삭제
    public List<BannerWithFileDTO> findFiles(Long bannerId) {
        return bannerFileMapper.findFilesByBannerId(bannerId);
    }
}
