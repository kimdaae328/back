package com.example.youeatieat.service;

import com.example.youeatieat.dto.ProductInquiryCriteriaDTO;
import com.example.youeatieat.dto.ProductInquiryDTO;
import com.example.youeatieat.repository.ProductInquiryDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Primary
public class ProductInquiryServiceImpl implements ProductInquiryService {
    @Autowired
    private final ProductInquiryDAO productInquiryDAO;


    @Override
    public void toInquire(ProductInquiryDTO productInquiryDTO) {
        productInquiryDAO.insertInquire(toVO(productInquiryDTO));
    }

    @Override
    public ProductInquiryCriteriaDTO getProductInquiryAll(int page, Long id) {
        ProductInquiryCriteriaDTO productInquiryCriteriaDTO = new ProductInquiryCriteriaDTO();
        Criteria criteria = new Criteria(page, productInquiryDAO.getAllCount(id));
        List<ProductInquiryDTO> productInquiries = productInquiryDAO.selectInquiryByProductId(criteria, id);

        criteria.setHasMore(productInquiries.size() > criteria.getRowCount());
//        11개 가져왔으면, 마지막 1개 삭제
        if(criteria.isHasMore()){
            productInquiries.remove(productInquiries.size() - 1);
        }

        productInquiryCriteriaDTO.setProductInquiries(productInquiries);
        productInquiryCriteriaDTO.setCriteria(criteria);

        return productInquiryCriteriaDTO;
    }

    @Override
    public int getListCount(Long id) {
        return productInquiryDAO.getAllCount(id);
    }
}
