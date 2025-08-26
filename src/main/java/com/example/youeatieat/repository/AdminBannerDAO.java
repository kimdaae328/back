package com.example.youeatieat.repository;

import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.BannerFileDTO;
import com.example.youeatieat.dto.BannerWithFileDTO;
import com.example.youeatieat.dto.FileDTO;
import com.example.youeatieat.mapper.AdminBannerMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminBannerDAO {
    private final AdminBannerMapper bannerMapper;

//    추가
    public void uploadBanner(BannerDTO bannerDTO) {
        bannerMapper.insertBanner(bannerDTO);
    }

//    조회
    public List<BannerWithFileDTO> findBannerAll() {
        return bannerMapper.selectBannerAll();
    }
}
