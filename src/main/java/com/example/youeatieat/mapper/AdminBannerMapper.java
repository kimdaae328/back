package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminBannerMapper {
//    추가
    public void insertBanner(BannerDTO bannerDTO);

//    조회
    public List<BannerWithFileDTO> selectBannerAll();
}
