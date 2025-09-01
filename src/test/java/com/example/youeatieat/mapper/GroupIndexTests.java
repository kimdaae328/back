package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.GroupIndexDTO;
import com.example.youeatieat.service.GroupIndexServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class GroupIndexTests {
    @Autowired
    GroupIndexServiceImpl groupIndexService;
    @Test
    public void insertGroup() {
        GroupIndexDTO groupIndexDTO = new GroupIndexDTO();
        groupIndexDTO.setProductId(3L);
        groupIndexService.addGroupIndex(groupIndexDTO);
    }
}
