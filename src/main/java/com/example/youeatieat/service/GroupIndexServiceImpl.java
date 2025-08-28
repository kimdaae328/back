package com.example.youeatieat.service;

import com.example.youeatieat.domain.GroupIndexVO;
import com.example.youeatieat.mapper.GroupIndexMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GroupIndexServiceImpl implements GroupIndexService {
    GroupIndexMapper groupIndexMapper;
    @Override
    public void addGroupIndex(GroupIndexVO groupIndexVO) {

    }
}
