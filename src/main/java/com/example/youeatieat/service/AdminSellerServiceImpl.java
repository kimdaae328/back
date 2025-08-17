package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminSellerCriteriaDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.repository.AdminSellerDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminSellerServiceImpl implements AdminSellerService {
    private final AdminSellerDAO memberDAO;

//    회원 목록(전쳬)
    @Override
    public AdminSellerCriteriaDTO getSellerList(int page) {
        AdminSellerCriteriaDTO sellerCriteriaDTO = new AdminSellerCriteriaDTO();
        Criteria criteria = new Criteria(page, memberDAO.findSellerCountAll());

        List<MemberDTO> sellers = memberDAO.findSellerAll(criteria);

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
    public MemberDTO getSellerDetail(Long id) {
        return memberDAO.findSellerById(id);
    }

}
