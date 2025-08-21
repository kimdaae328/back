package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminCustomerCriteriaDTO;
import com.example.youeatieat.dto.CustomerDetailWithPaymentDTO;
import com.example.youeatieat.dto.MemberDTO;

public interface AdminCustomerService {
//    회원 목록(전체)
    public AdminCustomerCriteriaDTO getList(int page, String keyword);

//    회원 상세
    CustomerDetailWithPaymentDTO getCustomerDetail(Long id);

//    //    회원 상세
//    CustomerDetailWithPaymentDTO getCustomerDetail(Long id, int page);

//    회원 목록(일반회원)
    public AdminCustomerCriteriaDTO getNonSubscribedList(int page, String keyword);

//    회원 목록(구독회원)
    public AdminCustomerCriteriaDTO getSubscribedList(int page, String keyword);
}
