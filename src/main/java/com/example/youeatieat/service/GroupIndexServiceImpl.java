package com.example.youeatieat.service;

import com.example.youeatieat.dto.GroupDTO;
import com.example.youeatieat.dto.GroupIndexDTO;
import com.example.youeatieat.mapper.GroupIndexMapper;
import com.example.youeatieat.repository.GroupDAO;
import com.example.youeatieat.repository.GroupIndexDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GroupIndexServiceImpl implements GroupIndexService {
    GroupIndexMapper groupIndexMapper;
    private final GroupDAO groupDAO;
    private final GroupIndexDAO groupIndexDAO;
    private final GroupServiceImpl groupService;

    @Override
    public void addGroupIndex(GroupIndexDTO groupIndexDTO) {
        GroupDTO groupDTO = new GroupDTO();
        groupDTO.setGroupIndexNumber(groupIndexDTO.getGroupIndexNumber());
        groupDTO.setProductId(groupIndexDTO.getProductId());
        groupIndexDAO.save(toVO(groupIndexDTO));
        groupService.addGroup(groupDTO);
    }
}
