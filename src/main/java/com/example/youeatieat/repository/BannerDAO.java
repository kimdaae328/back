package com.example.youeatieat.repository;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.mapper.BannerMapper;
import com.example.youeatieat.mapper.CartMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class BannerDAO {
    private final BannerMapper bannerMapper;

    //    banner all select
    public List<BannerDTO> AllBanner() {return bannerMapper.selectAllBanner();}
}
