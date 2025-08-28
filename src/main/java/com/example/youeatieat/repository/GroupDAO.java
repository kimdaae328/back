package com.example.youeatieat.repository;

import com.example.youeatieat.domain.GroupVO;
import com.example.youeatieat.mapper.GroupMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@Repository
@RequiredArgsConstructor
public class GroupDAO {
        private final GroupMapper groupMapper;
    public void save(GroupVO groupVO) {
        groupMapper.insertGroup(groupVO);
    }
}
