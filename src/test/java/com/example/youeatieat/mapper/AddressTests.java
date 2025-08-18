package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.AddressVO;
import com.example.youeatieat.dto.AddressDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class AddressTests {
    @Autowired
    AddressMapper addressMapper;
    @Test
    public void insertAddress(){
        AddressDTO addressDTO = new AddressDTO();
        addressDTO.setId(100L);
        addressDTO.setAddressDetail("성남시");
        addressDTO.setAddress("경기도");
        addressDTO.setMemberId(1L);

    }
}
