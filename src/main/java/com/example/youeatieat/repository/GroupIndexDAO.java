package com.example.youeatieat.repository;

import com.example.youeatieat.domain.GroupIndexVO;
import com.example.youeatieat.mapper.GroupIndexMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@Repository
@RequiredArgsConstructor
public class GroupIndexDAO {
    private final GroupIndexMapper groupIndexMapper;

//    그룹 인덱스 생성
    public void save(GroupIndexVO groupIndexVO) {
        groupIndexMapper.insertGroupIndex(groupIndexVO);
    }

    //   상품으로 그룹 인덱스 조회
    public Long findGroupIndexByProductId(Long productId) {
        return groupIndexMapper.selectGroupIndex(productId);
    }
}
