package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminCustomerMapper {
//    회원 목록(전쳬)
    public List<MemberDTO> selectCustomerAll(Criteria criteria);

//    전체 개수 조회(전쳬)
    public int selectCountAll();

//    회원 상세
    MemberDTO selectDetailCustomer(Long id);

//    회원 목록(일반회원)
    public List<MemberDTO> selectNonSubscribedCustomerAll(Criteria criteria);

//    전체 개수 조회(일반회원)
    public int selectNonSubscribedCountAll();

//    회원 목록(구독회원)
    public List<MemberDTO> selectSubscribedCustomerAll(Criteria criteria);

//    전체 개수 조회(구독회원)
    public int selectSubscribedCountAll();
}
