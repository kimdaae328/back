package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.AddressVO;
import com.example.youeatieat.dto.AddressDTO;
import com.example.youeatieat.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AddressMapper {
//    추가
    public void insertAddress(AddressVO addressVO);
//    조회
//    삭제
//    수정
}
