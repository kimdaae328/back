package com.example.youeatieat.service;

import com.example.youeatieat.dto.GroupDTO;
import com.example.youeatieat.mapper.GroupMapper;
import com.example.youeatieat.repository.GroupDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GroupServiceImpl implements GroupService {
    private final GroupDAO groupDAO;
    private final GroupMapper groupMapper;

    @Override
    public void addGroup(GroupDTO groupDTO) {
        groupDAO.save(toVO(groupDTO));
    }
}
