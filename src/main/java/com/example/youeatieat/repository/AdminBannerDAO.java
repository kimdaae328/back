package com.example.youeatieat.repository;

import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.BannerFileDTO;
import com.example.youeatieat.dto.FileDTO;
import com.example.youeatieat.mapper.AdminBannerMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminBannerDAO {
    private final AdminBannerMapper BannerMapper;

//    조회
    public List<BannerFileDTO> findBannerAll() {
        return BannerMapper.selectBannerAll();
    }
}
