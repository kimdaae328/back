package com.example.youeatieat.service;

import com.example.youeatieat.dto.*;
import com.example.youeatieat.repository.AdminSellerDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminSellerServiceImpl implements AdminSellerService {
    private final AdminSellerDAO memberDAO;

//    회원 목록(전쳬)
    @Override
    public AdminSellerCriteriaDTO getSellerList(int page, String keyword) {
        AdminSellerCriteriaDTO sellerCriteriaDTO = new AdminSellerCriteriaDTO();
        Criteria criteria = new Criteria(page, memberDAO.findSellerCountAll(keyword));

        List<MemberDTO> sellers = memberDAO.findSellerAll(criteria, keyword);

        criteria.setHasMore(sellers.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            sellers.remove(sellers.size() - 1);
        }

        sellerCriteriaDTO.setSellers(sellers);
        sellerCriteriaDTO.setCriteria(criteria);

        return sellerCriteriaDTO;
    }

//    회원 상세
    @Override
    public CustomerDetailWithPurchaseDTO getSellerDetail(Long id) {
        CustomerDetailWithPurchaseDTO dto = Optional.ofNullable(memberDAO.findSellerById(id))
                .orElseThrow(() -> new RuntimeException("해당 회원을 찾을 수 없습니다."));

        List<PurchaseRequestDTO> purchase = memberDAO.findPurchaseRequestAll(id);
        dto.setPurchase(purchase);

        PaymentCalculateDTO paymentCalculate = memberDAO.findCountPurchaseAll(id);
        dto.setPaymentCalculate(paymentCalculate);

        return dto;
    }

//    회원 목록(일반)
    @Override
    public AdminSellerCriteriaDTO getSellerYoueatieatList(int page, String keyword) {
        AdminSellerCriteriaDTO sellerCriteriaDTO = new AdminSellerCriteriaDTO();
        Criteria criteria = new Criteria(page, memberDAO.findYoueatieatSellerCount(keyword));

        List<MemberDTO> sellers = memberDAO.findYoueatieatSellerAll(criteria, keyword);

        criteria.setHasMore(sellers.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            sellers.remove(sellers.size() - 1);
        }

        sellerCriteriaDTO.setSellers(sellers);
        sellerCriteriaDTO.setCriteria(criteria);

        return sellerCriteriaDTO;
    }

//    회원 목록(카카오)
    @Override
    public AdminSellerCriteriaDTO getSellerKakaoList(int page, String keyword) {
        AdminSellerCriteriaDTO sellerCriteriaDTO = new AdminSellerCriteriaDTO();
        Criteria criteria = new Criteria(page, memberDAO.findKakaoSellerCount(keyword));

        List<MemberDTO> sellers = memberDAO.findKakaoSellerAll(criteria, keyword);

        criteria.setHasMore(sellers.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            sellers.remove(sellers.size() - 1);
        }

        sellerCriteriaDTO.setSellers(sellers);
        sellerCriteriaDTO.setCriteria(criteria);

        return sellerCriteriaDTO;
    }

}
