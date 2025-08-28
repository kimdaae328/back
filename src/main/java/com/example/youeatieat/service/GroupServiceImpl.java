package com.example.youeatieat.service;

import com.example.youeatieat.domain.GroupVO;
import com.example.youeatieat.mapper.GroupMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GroupServiceImpl implements GroupService {
    GroupMapper groupMapper;
    @Override
    public void addGroup(GroupVO groupVO) {

    }
}
