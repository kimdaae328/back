package com.example.youeatieat.repository;

import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryDetailWithAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
import com.example.youeatieat.mapper.AdminInquiryMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminInquiryDAO {
    private final AdminInquiryMapper inquiryMapper;

//    문의 목록
    public List<InquiryDetailWithAnswerDTO> findInquiryAll(Criteria criteria){
        return inquiryMapper.selectInquiryAll(criteria);
    }

//    문의 조회
    public int findInquiryCountAll(){
        return inquiryMapper.selectInquiryCountAll();
    }

//    문의 상세
    public InquiryDetailWithAnswerDTO findInquiryDetail(Long inquiryId) {
        return inquiryMapper.selectInquiryDetail(inquiryId);
    }

//    문의 답변 등록
    public void saveInquiryAnswer(InquiryAnswerDTO inquiryAnswerDTO) {
        inquiryMapper.insertInquiryAnswer(inquiryAnswerDTO);
    }
}
