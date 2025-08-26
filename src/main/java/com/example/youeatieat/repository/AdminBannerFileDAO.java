package com.example.youeatieat.repository;

import com.example.youeatieat.domain.BannerFileVO;
import com.example.youeatieat.dto.BannerFileDTO;
import com.example.youeatieat.dto.FileDTO;
import com.example.youeatieat.mapper.AdminBannerFileMapper;
import com.example.youeatieat.mapper.AdminBannerMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class AdminBannerFileDAO {
    private final AdminBannerFileMapper bannerFileMapper;

//    추가
    public void save(BannerFileVO bannerFileVO) {
        bannerFileMapper.insertBannerFile(bannerFileVO);
    }
}
