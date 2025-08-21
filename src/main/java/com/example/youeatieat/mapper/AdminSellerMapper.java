package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface AdminSellerMapper {
//    회원 목록(전쳬)
    public List<MemberDTO> selectSellerAll(@Param("criteria") Criteria criteria, @Param("keyword") String keyword);

//    전체 개수 조회(전쳬)
    public int selectSellerCountAll(@Param("keyword") String keyword);

//    회원 상세
    CustomerDetailWithPurchaseDTO selectDetailSeller(Long id);

//    판매 목록
    List<PurchaseRequestDTO> selectPurchaseAll(Long id);

//    판매 내역 계산
    PaymentCalculateDTO selectPurchaseCalculate(Long memberId);

//    회원 목록(일반)
    public List<MemberDTO> selectYoueatieatSellerAll(@Param("criteria") Criteria criteria, @Param("keyword") String keyword);

//    전체 개수 조회(일반)
    public int selectYoueatieatCountAll(@Param("keyword") String keyword);

//    회원 목록(카카오)
    public List<MemberDTO> selectKakaoSellerAll(@Param("criteria") Criteria criteria, @Param("keyword") String keyword);

//    전체 개수 조회(카카오)
    public int selectKakaoCountAll(@Param("keyword") String keyword);

}
