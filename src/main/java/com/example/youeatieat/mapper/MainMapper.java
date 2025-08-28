package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
import com.example.youeatieat.dto.MainPackDealDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MainMapper {
    //    특가 리스트
    public List<MainPackDealDTO> selectPackDealAll();

    //    인기 리스트
    public List<MainPackDealDTO> selectBestAll();
}

