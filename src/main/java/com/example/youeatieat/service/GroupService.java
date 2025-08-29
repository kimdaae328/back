package com.example.youeatieat.service;

import com.example.youeatieat.domain.GroupVO;
import com.example.youeatieat.dto.GroupDTO;

public interface GroupService {
    public void addGroup (GroupDTO groupDTO);

    default GroupVO toVO(GroupDTO groupDTO){
        return GroupVO.builder()
                .groupIndexNumber(groupDTO.getGroupIndexNumber())
                .productId(groupDTO.getProductId())
                .groupCancelable(groupDTO.getGroupCancelable())
                .build();
    }
}
