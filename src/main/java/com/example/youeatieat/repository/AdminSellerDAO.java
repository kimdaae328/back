package com.example.youeatieat.repository;

import com.example.youeatieat.dto.MemberDTO;
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
    public List<MemberDTO> findSellerAll(Criteria criteria){
        return sellerMapper.selectSellerAll(criteria);
    }

//    전체 개수 조회
    public int findSellerCountAll(){
        return sellerMapper.selectSellerCountAll();
    }

//    회원 상세
    public MemberDTO findSellerById(Long id) {
        return sellerMapper.selectDetailSeller(id);
    }

}
