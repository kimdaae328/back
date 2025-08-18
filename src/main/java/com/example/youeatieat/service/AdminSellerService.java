package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminSellerCriteriaDTO;
import com.example.youeatieat.dto.MemberDTO;

public interface AdminSellerService {
//    회원 목록(전체)
    public AdminSellerCriteriaDTO getSellerList(int page);

//    회원 상세
    MemberDTO getSellerDetail(Long id);
}
