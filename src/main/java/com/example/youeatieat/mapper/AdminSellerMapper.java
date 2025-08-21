package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminSellerMapper {
//    회원 목록(전쳬)
    public List<MemberDTO> selectSellerAll(Criteria criteria);

//    전체 개수 조회(전쳬)
    public int selectSellerCountAll();

//    회원 상세
    CustomerDetailWithPurchaseDTO selectDetailSeller(Long id);

//    회원 목록(일반)
    public List<MemberDTO> selectYoueatieatSellerAll(Criteria criteria);

//    전체 개수 조회(일반)
    public int selectYoueatieatCountAll();

//    회원 목록(카카오)
    public List<MemberDTO> selectKakaoSellerAll(Criteria criteria);

//    전체 개수 조회(카카오)
    public int selectKakaoCountAll();

//    판매 목록
    List<PurchaseRequestDTO> selectPurchaseAll(Long id);

//    판매 내역 계산
    PaymentCalculateDTO selectPurchaseCalculate(Long memberId);

}
