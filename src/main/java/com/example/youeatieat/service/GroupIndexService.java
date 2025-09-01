package com.example.youeatieat.service;

import com.example.youeatieat.domain.GroupIndexVO;
import com.example.youeatieat.domain.RequestVO;
import com.example.youeatieat.dto.GroupIndexDTO;
import com.example.youeatieat.dto.RequestDTO;

public interface GroupIndexService {
    public void addGroupIndex (GroupIndexDTO groupIndexDTO);

//    public void findGroupIndexByProductId(Long productId);

    default GroupIndexVO toGroupIndexVO(GroupIndexDTO groupIndexDTO){
        return GroupIndexVO.builder()
                .id(groupIndexDTO.getId())
                .productId(groupIndexDTO.getProductId())
                .groupIndexNumber(groupIndexDTO.getGroupIndexNumber())
                .build();
    }
    default RequestVO toRequestVO(RequestDTO requestDTO){
        return RequestVO.builder()
                .id(requestDTO.getId())
                .requestAmount(requestDTO.getRequestAmount())
                .requestPrice(requestDTO.getRequestPrice())
                .requestStatus(requestDTO.getRequestStatus())
                .memberId(requestDTO.getMemberId())
                .groupIndexNumber(requestDTO.getGroupIndexNumber())
                .productId(requestDTO.getProductId())
                .build();
    }
}
