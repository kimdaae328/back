package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.CustomerDetailWithPaymentDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.dto.PaymentCalculateDTO;
import com.example.youeatieat.dto.PaymentItemDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminCustomerMapper {
//    회원 목록(전쳬)
    public List<MemberDTO> selectCustomerAll(@Param("criteria") Criteria criteria, @Param("keyword") String keyword);

//    전체 개수 조회(전체)
    public int selectCountAll(@Param("keyword") String keyword);

//    회원 상세
    CustomerDetailWithPaymentDTO selectDetailCustomer(Long id);

//    결제 목록
    List<PaymentItemDTO> selectPaymentsAll(Long id);

//    결제 개수 조회
//    public int selectPaymentCountAll(Long id);

//    결제 내역 계산
    PaymentCalculateDTO selectPaymentCalculate(Long memberId);

//    회원 목록(일반회원)
    public List<MemberDTO> selectNonSubscribedCustomerAll(@Param("criteria") Criteria criteria, @Param("keyword") String keyword);

//    전체 개수 조회(일반회원)
    public int selectNonSubscribedCountAll(@Param("keyword") String keyword);

//    회원 목록(구독회원)
    public List<MemberDTO> selectSubscribedCustomerAll(@Param("criteria") Criteria criteria, @Param("keyword") String keyword);

//    전체 개수 조회(구독회원)
    public int selectSubscribedCountAll(@Param("keyword") String keyword);

}
