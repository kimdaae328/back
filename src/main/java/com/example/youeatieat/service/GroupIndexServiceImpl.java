package com.example.youeatieat.service;

import com.example.youeatieat.dto.GroupDTO;
import com.example.youeatieat.dto.GroupIndexDTO;
import com.example.youeatieat.dto.RequestDTO;
import com.example.youeatieat.enumeration.Request;
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
        Long groupIndexNum = groupIndexDAO.findGroupIndexByProductId(groupIndexDTO.getProductId());
//      그룹인덱스++할때 기존 상품의 그룹인덱스 딜리트해야함
        if (groupIndexNum == null) {
            groupIndexNum = 1L;
            groupIndexDTO.setGroupIndexNumber(groupIndexNum);
            groupIndexDAO.save(toGroupIndexVO(groupIndexDTO));
            GroupDTO groupDTO = new GroupDTO();
            groupDTO.setGroupIndexNumber(groupIndexDTO.getGroupIndexNumber());
            groupDTO.setProductId(groupIndexDTO.getProductId());
            groupService.addGroup(groupDTO);
            RequestDTO requestDTO = new RequestDTO();
            requestDTO.setGroupIndexNumber(groupIndexDTO.getGroupIndexNumber());
            requestDTO.setProductId(groupIndexDTO.getProductId());
            requestDTO.setRequestStatus(Request.DONE);
            Long memberId = 0L;
            requestDTO.setMemberId(memberId);

        }
//        그룹인덱스 검사해서 다음그룹으로 ++해야하는데


//        리퀘스트







    }


    //        chat GPT




}
