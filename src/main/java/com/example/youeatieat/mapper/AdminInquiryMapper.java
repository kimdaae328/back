package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminInquiryMapper {
//    문의 목록(전체)
    public List<InquiryWithAnswerDTO> selectInquiryAll(@Param("criteria") Criteria criteria, @Param("keyword") String keyword);

//    문의 목록(미답변)
    public List<InquiryWithAnswerDTO> selectUnansweredAll(@Param("criteria") Criteria criteria, @Param("keyword") String keyword);

//    문의 목록(답변완료)
    public List<InquiryWithAnswerDTO> selectAnsweredAll(@Param("criteria") Criteria criteria, @Param("keyword") String keyword);

//    문의 조회(전쳬)
    public int selectInquiryCountAll(String keyword);

//    문의 상세
    public InquiryWithAnswerDTO selectInquiryDetail(Long inquiryId);

//    문의 답변 등록
    public void insertInquiryAnswer(InquiryAnswerDTO inquiryAnswerDTO);

//    문의 조회(미답변)
    public int selectUnansweredCountAll(String keyword);

//    문의 조회(답변완료)
    public int selectAnsweredCountAll(String keyword);
}
