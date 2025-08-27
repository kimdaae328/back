package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminBannerMapper {
//    추가
    public void insertBanner(BannerDTO bannerDTO);

//    조회
    public List<BannerWithFileDTO> selectBannerAll();

//    삭제
    public void deleteBanner(Long bannerId);

//    순서 수정
    public int updateBannerOrder(@Param("bannerId") Long bannerId, @Param("bannerOrder") int bannerOrder);
}
