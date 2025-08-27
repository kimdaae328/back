package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.BannerFileVO;
import com.example.youeatieat.dto.BannerWithFileDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminBannerFileMapper {
//    추가
    public void insertBannerFile(BannerFileVO bannerFileDTO);

//    삭제
    public void deleteBannerFile(Long bannerId);

//    파일삭제
    List<BannerWithFileDTO> findFilesByBannerId(Long bannerId);
}
