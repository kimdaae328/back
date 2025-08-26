package com.example.youeatieat.repository;

import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
import com.example.youeatieat.mapper.AdminInquiryMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminInquiryDAO {
    private final AdminInquiryMapper inquiryMapper;

//    문의 목록(전체)
    public List<InquiryWithAnswerDTO> findInquiryAll(Criteria criteria, String keyword){
        return inquiryMapper.selectInquiryAll(criteria, keyword);
    }

//    문의 목록(미답변)
    public List<InquiryWithAnswerDTO> findUnansweredAll(Criteria criteria, String keyword){
        return inquiryMapper.selectUnansweredAll(criteria, keyword);
    }

//    문의 목록(답변완료)
    public List<InquiryWithAnswerDTO> findAnsweredAll(Criteria criteria, String keyword){
        return inquiryMapper.selectAnsweredAll(criteria, keyword);
    }

//    문의 조회(전쳬)
    public int findInquiryCountAll(String keyword){
        return inquiryMapper.selectInquiryCountAll(keyword);
    }

//    문의 상세
    public InquiryWithAnswerDTO findInquiryDetail(Long inquiryId) {
        return inquiryMapper.selectInquiryDetail(inquiryId);
    }

//    문의 답변 등록
    public void saveInquiryAnswer(InquiryAnswerDTO inquiryAnswerDTO) {
        inquiryMapper.insertInquiryAnswer(inquiryAnswerDTO);
    }

//    문의 조회(미답변)
    public int findUnansweredCountAll(String keyword){
        return inquiryMapper.selectUnansweredCountAll(keyword);
    }

//    문의 조회(답변완료)
    public int findAnsweredCountAll(String keyword){
        return inquiryMapper.selectAnsweredCountAll(keyword);
    }
}
