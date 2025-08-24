package com.example.youeatieat.service;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.repository.AdminInquiryDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminInquiryServicelmpl implements AdminInquiryService {
    private final AdminInquiryDAO adminInquiryDAO;

//    문의 목록
    @Override
    public AdminInquiryCriteriaDTO getInquiryList(int page) {
        AdminInquiryCriteriaDTO inquiryCriteriaDTO = new AdminInquiryCriteriaDTO();
        Criteria criteria = new Criteria(page, adminInquiryDAO.findInquiryCountAll());

        List<InquiryDetailWithAnswerDTO> inquiries = adminInquiryDAO.findInquiryAll(criteria);

        criteria.setHasMore(inquiries.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            inquiries.remove(inquiries.size() - 1);
        }

        inquiryCriteriaDTO.setInquiries(inquiries);
        inquiryCriteriaDTO.setCriteria(criteria);

        return inquiryCriteriaDTO;
    }

//    문의 상세
    @Override
    public InquiryDetailWithAnswerDTO getInquiryDetail(Long inquiryId) {
        InquiryDetailWithAnswerDTO inquiryDetailWithAnswerDTO = Optional.ofNullable(adminInquiryDAO.findInquiryDetail(inquiryId))
                .orElseThrow(() -> new RuntimeException("해당 문의을 찾을 수 없습니다."));

        return inquiryDetailWithAnswerDTO;
    }

//    문의 답변 등록
    @Override
    public void writeInquiryAnswer(InquiryAnswerDTO inquiryAnswerDTO) {
        adminInquiryDAO.saveInquiryAnswer(inquiryAnswerDTO);
    }
}