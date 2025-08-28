package com.example.youeatieat.service;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.repository.AdminProductDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminProductServiceImpl implements AdminProductService {
    private final AdminProductDAO productDAO;

//    회원 목록(전쳬)
    @Override
    public AdminProductCriteriaDTO getList(int page, String keyword) {
        AdminProductCriteriaDTO productCriteriaDTO = new AdminProductCriteriaDTO();
        Criteria criteria = new Criteria(page, productDAO.findCountAll(keyword));

        List<ProductDTO> products = productDAO.findProductAll(criteria, keyword);

        criteria.setHasMore(products.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            products.remove(products.size() - 1);
        }

        productCriteriaDTO.setProducts(products);
        productCriteriaDTO.setCriteria(criteria);

        return productCriteriaDTO;
    }

//    @Override
//    public CustomerDetailWithPaymentDTO getCustomerDetail(Long id) {
//        // 기본적으로 page = 1로 설정
//        return getCustomerDetail(id, 1);
//    }

//    회원 상세
//    @Override
//    public CustomerDetailWithPaymentDTO getCustomerDetail(Long id) {
//        CustomerDetailWithPaymentDTO dto = Optional.ofNullable(memberDAO.findCustomerById(id))
//                .orElseThrow(() -> new RuntimeException("해당 회원을 찾을 수 없습니다."));
//
//        List<PaymentItemDTO> payments = memberDAO.findPaymentItems(id);
//        dto.setPayments(payments);
//
//        PaymentCalculateDTO paymentCalculate = memberDAO.findCountPaymentItemsAll(id);
//        dto.setPaymentCalculate(paymentCalculate);
//
//        return dto;
//    }
}
