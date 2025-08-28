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
    public void save(GroupIndexVO groupIndexVO) {
        groupIndexMapper.insertGroupIndex(groupIndexVO);
    }
}
