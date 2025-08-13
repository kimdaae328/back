package com.example.youeatieat.repository;

import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.mapper.MemberListMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MemberDAO {
    private final MemberListMapper memberMapper;

//    목록
    public List<MemberDTO> findMemberAll(Criteria criteria){
        return memberMapper.selectMemberAll(criteria);
    }

//    전체 개수 조회
    public int findCountAll(){
        return memberMapper.selectCountAll();
    }

}
