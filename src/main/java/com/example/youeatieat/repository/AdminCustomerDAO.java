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

//    목록
    public List<MemberDTO> findCustomerAll(Criteria criteria){
        return customerMapper.selectCustomerAll(criteria);
    }

//    전체 개수 조회
    public int findCountAll(){
        return customerMapper.selectCountAll();
    }

}
