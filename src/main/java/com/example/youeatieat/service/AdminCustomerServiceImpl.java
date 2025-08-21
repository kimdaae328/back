package com.example.youeatieat.service;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.repository.AdminCustomerDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminCustomerServiceImpl implements AdminCustomerService {
    private final AdminCustomerDAO memberDAO;

//    회원 목록(전쳬)
    @Override
    public AdminCustomerCriteriaDTO getList(int page) {
        AdminCustomerCriteriaDTO customerCriteriaDTO = new AdminCustomerCriteriaDTO();
        Criteria criteria = new Criteria(page, memberDAO.findCountAll());

        List<MemberDTO> customers = memberDAO.findCustomerAll(criteria);

        criteria.setHasMore(customers.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            customers.remove(customers.size() - 1);
        }

        customerCriteriaDTO.setCustomers(customers);
        customerCriteriaDTO.setCriteria(criteria);

        return customerCriteriaDTO;
    }

//    @Override
//    public CustomerDetailWithPaymentDTO getCustomerDetail(Long id) {
//        // 기본적으로 page = 1로 설정
//        return getCustomerDetail(id, 1);
//    }

//    회원 상세
    @Override
    public CustomerDetailWithPaymentDTO getCustomerDetail(Long id) {
        CustomerDetailWithPaymentDTO dto = Optional.ofNullable(memberDAO.findCustomerById(id))
                .orElseThrow(() -> new RuntimeException("해당 회원을 찾을 수 없습니다."));

        List<PaymentItemDTO> payments = memberDAO.findPaymentItems(id);
        dto.setPayments(payments);

        PaymentCalculateDTO paymentCalculate = memberDAO.findCountPaymentItemsAll(id);
        dto.setPaymentCalculate(paymentCalculate);

        return dto;
    }


//    회원 목록(일반회원)
    @Override
    public AdminCustomerCriteriaDTO getNonSubscribedList(int page) {
        AdminCustomerCriteriaDTO customerCriteriaDTO = new AdminCustomerCriteriaDTO();
        Criteria criteria = new Criteria(page, memberDAO.findNonSubscribedCountAll());

        List<MemberDTO> customers = memberDAO.findNonSubscribedCustomerAll(criteria);

        criteria.setHasMore(customers.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            customers.remove(customers.size() - 1);
        }

        customerCriteriaDTO.setCustomers(customers);
        customerCriteriaDTO.setCriteria(criteria);

        return customerCriteriaDTO;
    }

//    회원 목록(구독회원)
    @Override
    public AdminCustomerCriteriaDTO getSubscribedList(int page) {
        AdminCustomerCriteriaDTO customerCriteriaDTO = new AdminCustomerCriteriaDTO();
        Criteria criteria = new Criteria(page, memberDAO.findSubscribedCountAll());

        List<MemberDTO> customers = memberDAO.findSubscribedCustomerAll(criteria);

        criteria.setHasMore(customers.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            customers.remove(customers.size() - 1);
        }

        customerCriteriaDTO.setCustomers(customers);
        customerCriteriaDTO.setCriteria(criteria);

        return customerCriteriaDTO;
    }
}
