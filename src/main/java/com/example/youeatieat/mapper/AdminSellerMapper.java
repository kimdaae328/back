package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.MemberDTO;
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
    MemberDTO selectDetailSeller(Long id);
}
