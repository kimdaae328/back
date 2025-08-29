package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminCustomerCriteriaDTO;
import com.example.youeatieat.dto.AdminRequestCriteriaDTO;
import com.example.youeatieat.dto.CustomerDetailWithPaymentDTO;

public interface AdminRequestService {
    //    결제 목록
    public AdminRequestCriteriaDTO getList(int page, String keyword);

}
