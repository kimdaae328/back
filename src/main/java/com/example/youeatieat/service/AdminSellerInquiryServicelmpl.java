package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminInquiryCriteriaDTO;
import com.example.youeatieat.dto.InquiryAnswerDTO;
import com.example.youeatieat.dto.InquiryWithAnswerDTO;
import com.example.youeatieat.repository.AdminInquiryDAO;
import com.example.youeatieat.repository.AdminSellerInquiryDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminSellerInquiryServicelmpl implements AdminSellerInquiryService {
    private final AdminSellerInquiryDAO adminInquiryDAO;

//    문의 목록(전체)
    @Override
    public AdminInquiryCriteriaDTO getInquiryList(int page) {
        AdminInquiryCriteriaDTO inquiryCriteriaDTO = new AdminInquiryCriteriaDTO();
        Criteria criteria = new Criteria(page, adminInquiryDAO.findInquiryCountAll());

        List<InquiryWithAnswerDTO> inquiries = adminInquiryDAO.findInquiryAll(criteria);

        criteria.setHasMore(inquiries.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            inquiries.remove(inquiries.size() - 1);
        }

        inquiryCriteriaDTO.setInquiries(inquiries);
        inquiryCriteriaDTO.setCriteria(criteria);

        return inquiryCriteriaDTO;
    }

//    문의 목록(미답변)
    @Override
    public AdminInquiryCriteriaDTO getUnansweredList(int page) {
        AdminInquiryCriteriaDTO inquiryCriteriaDTO = new AdminInquiryCriteriaDTO();
        Criteria criteria = new Criteria(page, adminInquiryDAO.findUnansweredCountAll());

        List<InquiryWithAnswerDTO> inquiries = adminInquiryDAO.findUnansweredAll(criteria);

        criteria.setHasMore(inquiries.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            inquiries.remove(inquiries.size() - 1);
        }

        inquiryCriteriaDTO.setInquiries(inquiries);
        inquiryCriteriaDTO.setCriteria(criteria);

        return inquiryCriteriaDTO;
    }

//    문의 목록(답변완료)
    @Override
    public AdminInquiryCriteriaDTO getAnsweredList(int page) {
        AdminInquiryCriteriaDTO inquiryCriteriaDTO = new AdminInquiryCriteriaDTO();
        Criteria criteria = new Criteria(page, adminInquiryDAO.findAnsweredCountAll());

        List<InquiryWithAnswerDTO> inquiries = adminInquiryDAO.findAnsweredAll(criteria);

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
    public InquiryWithAnswerDTO getInquiryDetail(Long inquiryId) {
        InquiryWithAnswerDTO inquiryDetailWithAnswerDTO = Optional.ofNullable(adminInquiryDAO.findInquiryDetail(inquiryId))
                .orElseThrow(() -> new RuntimeException("해당 문의을 찾을 수 없습니다."));

        return inquiryDetailWithAnswerDTO;
    }

//    문의 답변 등록
    @Override
    public void writeInquiryAnswer(InquiryAnswerDTO inquiryAnswerDTO) {
        adminInquiryDAO.saveInquiryAnswer(inquiryAnswerDTO);
    }
}