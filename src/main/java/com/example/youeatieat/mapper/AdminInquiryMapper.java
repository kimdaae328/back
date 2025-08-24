package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryDetailWithAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminInquiryMapper {
//    문의 목록
    public List<InquiryDetailWithAnswerDTO> selectInquiryAll(Criteria criteria);

//    문의 조회
    public int selectInquiryCountAll();

//    문의 상세
    public InquiryDetailWithAnswerDTO selectInquiryDetail(Long inquiryId);

//    문의 답변 등록
    public void insertInquiryAnswer(InquiryAnswerDTO inquiryAnswerDTO);

}
