package com.example.youeatieat.repository;

import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
import com.example.youeatieat.mapper.AdminInquiryMapper;
import com.example.youeatieat.mapper.AdminSellerInquiryMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminSellerInquiryDAO {
    private final AdminSellerInquiryMapper inquiryMapper;

//    문의 목록(전체)
    public List<InquiryWithAnswerDTO> findInquiryAll(Criteria criteria){
        return inquiryMapper.selectInquiryAll(criteria);
    }

//    문의 목록(미답변)
    public List<InquiryWithAnswerDTO> findUnansweredAll(Criteria criteria){
        return inquiryMapper.selectUnansweredAll(criteria);
    }

//    문의 목록(답변완료)
    public List<InquiryWithAnswerDTO> findAnsweredAll(Criteria criteria){
        return inquiryMapper.selectAnsweredAll(criteria);
    }

//    문의 조회(전쳬)
    public int findInquiryCountAll(){
        return inquiryMapper.selectInquiryCountAll();
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
    public int findUnansweredCountAll(){
        return inquiryMapper.selectUnansweredCountAll();
    }

//    문의 조회(답변완료)
    public int findAnsweredCountAll(){
        return inquiryMapper.selectAnsweredCountAll();
    }
}
