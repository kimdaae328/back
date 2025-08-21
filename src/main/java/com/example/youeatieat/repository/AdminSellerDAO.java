package com.example.youeatieat.repository;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.mapper.AdminSellerMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AdminSellerDAO {
    private final AdminSellerMapper sellerMapper;

//    회원 목록(전쳬)
    public List<MemberDTO> findSellerAll(Criteria criteria, String keyword){
        return sellerMapper.selectSellerAll(criteria, keyword);
    }

//    전체 개수 조회
    public int findSellerCountAll(String keyword){
        return sellerMapper.selectSellerCountAll(keyword);
    }

//    회원 상세
    public CustomerDetailWithPurchaseDTO findSellerById(Long id) {
        return sellerMapper.selectDetailSeller(id);
    }

//    판매 목록
    public List<PurchaseRequestDTO> findPurchaseRequestAll(Long id){
        return sellerMapper.selectPurchaseAll(id);
    }

//    결제 내역 계산
    public PaymentCalculateDTO findCountPurchaseAll(Long memberId){
        return sellerMapper.selectPurchaseCalculate(memberId);
    };

    //    회원 목록(일반)
    public List<MemberDTO> findYoueatieatSellerAll(Criteria criteria, String keyword){
        return sellerMapper.selectYoueatieatSellerAll(criteria, keyword);
    }

    //    전체 개수 조회(일반)
    public int findYoueatieatSellerCount(String keyword){
        return sellerMapper.selectYoueatieatCountAll(keyword);
    }

    //    회원 목록(카카오)
    public List<MemberDTO> findKakaoSellerAll(Criteria criteria, String keyword){
        return sellerMapper.selectKakaoSellerAll(criteria, keyword);
    }

    //    전체 개수 조회(카카오)
    public int findKakaoSellerCount(String keyword){
        return sellerMapper.selectKakaoCountAll(keyword);
    }

}
