package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.BannerFileDTO;
import com.example.youeatieat.dto.FileDTO;
import com.example.youeatieat.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminBannerMapper {
//    조회
    public List<BannerFileDTO> selectBannerAll();
}
