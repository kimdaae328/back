package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminCustomerCriteriaDTO;
import com.example.youeatieat.dto.AdminProductCriteriaDTO;
import com.example.youeatieat.dto.CustomerDetailWithPaymentDTO;

public interface AdminProductService {
//    목록(전체)
    public AdminProductCriteriaDTO getList(int page, String keyword);

//    상세
//    ProductDetailWithPaymentDTO getProductDetail(Long id);


}
