package com.example.youeatieat.service;

import com.example.youeatieat.dto.ProductInquiryAnswerDTO;
import com.example.youeatieat.dto.ProductInquiryCriteriaDTO;
import com.example.youeatieat.dto.ProductInquiryDTO;
import com.example.youeatieat.repository.ProductInquiryAnswerDAO;
import com.example.youeatieat.repository.ProductInquiryDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Primary
public class ProductInquiryAnswerServiceImpl implements ProductInquiryAnswerService {
    @Autowired
    private ProductInquiryAnswerDAO productInquiryAnswerDAO;

    @Override
    public Optional<ProductInquiryAnswerDTO> selectAnswerById(Long id) {
        return productInquiryAnswerDAO.selectAnswerByProductId(id).stream().findFirst();
    }
}
