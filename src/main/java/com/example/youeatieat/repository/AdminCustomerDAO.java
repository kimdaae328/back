package com.example.youeatieat.repository;

import com.example.youeatieat.dto.CustomerDetailWithPaymentDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.dto.PaymentCalculateDTO;
import com.example.youeatieat.dto.PaymentItemDTO;
import com.example.youeatieat.mapper.AdminCustomerMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminCustomerDAO {
    private final AdminCustomerMapper customerMapper;

//    회원 목록(전쳬)
    public List<MemberDTO> findCustomerAll(Criteria criteria, String keyword) {
        return customerMapper.selectCustomerAll(criteria, keyword);
    }

//    전체 개수 조회
    public int findCountAll(String keyword){
        return customerMapper.selectCountAll(keyword);
    }

//    회원 상세
    public CustomerDetailWithPaymentDTO findCustomerById(Long id) {
        return customerMapper.selectDetailCustomer(id);
    }

//    결제 목록
    public List<PaymentItemDTO> findPaymentItems(Long id){
        return customerMapper.selectPaymentsAll(id);
    }

//    결제 개수 조회
//    public int findPaymentCountAll(Long id) {
//        return customerMapper.selectPaymentCountAll(id);
//    }

//    결제 내역 계산
    public PaymentCalculateDTO findCountPaymentItemsAll(Long memberId){
        return customerMapper.selectPaymentCalculate(memberId);
    };

//    회원 목록(일반회원)
    public List<MemberDTO> findNonSubscribedCustomerAll(Criteria criteria, String keyword){
        return customerMapper.selectNonSubscribedCustomerAll(criteria, keyword);
    }

//    전체 개수 조회(일반회원)
    public int findNonSubscribedCountAll(String keyword){
        return customerMapper.selectNonSubscribedCountAll(keyword);
    }

//    회원 목록(구독회원)
    public List<MemberDTO> findSubscribedCustomerAll(Criteria criteria, String keyword){
        return customerMapper.selectSubscribedCustomerAll(criteria, keyword);
    }

//    전체 개수 조회(구독회원)
    public int findSubscribedCountAll(String keyword){
        return customerMapper.selectSubscribedCountAll(keyword);
    }

}
