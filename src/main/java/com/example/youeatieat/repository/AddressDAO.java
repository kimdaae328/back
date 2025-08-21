package com.example.youeatieat.repository;

import com.example.youeatieat.domain.AddressVO;
import com.example.youeatieat.mapper.AddressMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@Repository
@RequiredArgsConstructor
public class AddressDAO {
    private final AddressMapper addressMapper;
    public void save(AddressVO addressVO) {
        addressMapper.insertAddress(addressVO);
    }

}
