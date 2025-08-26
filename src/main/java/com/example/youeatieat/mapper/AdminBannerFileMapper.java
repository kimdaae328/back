package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.BannerFileVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdminBannerFileMapper {
//    추가
    public void insertBannerFile(BannerFileVO bannerFileDTO);
}
