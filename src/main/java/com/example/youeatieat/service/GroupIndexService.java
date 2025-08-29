package com.example.youeatieat.service;

import com.example.youeatieat.domain.GroupIndexVO;
import com.example.youeatieat.dto.GroupIndexDTO;

public interface GroupIndexService {
    public void addGroupIndex (GroupIndexDTO groupIndexDTO);

    default GroupIndexVO toVO(GroupIndexDTO groupIndexDTO){
        return GroupIndexVO.builder()
                .id(groupIndexDTO.getId())
                .productId(groupIndexDTO.getProductId())
                .groupIndexNumber(groupIndexDTO.getGroupIndexNumber())
                .build();
    }
}
