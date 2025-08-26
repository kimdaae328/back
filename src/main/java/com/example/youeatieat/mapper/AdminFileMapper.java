package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.FileDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdminFileMapper {
//    추가
    public void insertFile(FileDTO fileDTO);
}
