package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.CartDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BannerMapper {

//    배너 조회
    public List<BannerDTO> selectAllBanner();
}
