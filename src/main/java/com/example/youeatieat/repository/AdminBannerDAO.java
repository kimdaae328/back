package com.example.youeatieat.repository;

import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.FileDTO;
import com.example.youeatieat.mapper.AdminBannerMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class AdminBannerDAO {
    private final AdminBannerMapper BannerMapper;

//    추가
//    public void save(BannerDTO bannerDTO) {
//        BannerMapper.insertBanner(bannerDTO);
//    }
}
