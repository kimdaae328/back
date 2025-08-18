package com.example.youeatieat.repository;

import com.example.youeatieat.dto.MemberDTO;
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
    public List<MemberDTO> findCustomerAll(Criteria criteria){
        return customerMapper.selectCustomerAll(criteria);
    }

//    전체 개수 조회
    public int findCountAll(){
        return customerMapper.selectCountAll();
    }

//    회원 상세
    public MemberDTO findCustomerById(Long id) {
        return customerMapper.selectDetailCustomer(id);
    }

//    회원 목록(구독회원)
    public List<MemberDTO> findNonSubscribedCustomerAll(Criteria criteria){
        return customerMapper.selectNonSubscribedCustomerAll(criteria);
    }

//    전체 개수 조회(구독회원)
    public int findNonSubscribedCountAll(){
        return customerMapper.selectNonSubscribedCountAll();
    }

//    회원 목록(구독회원)
    public List<MemberDTO> findSubscribedCustomerAll(Criteria criteria){
        return customerMapper.selectSubscribedCustomerAll(criteria);
    }

//    전체 개수 조회(구독회원)
    public int findSubscribedCountAll(){
        return customerMapper.selectSubscribedCountAll();
    }

}
