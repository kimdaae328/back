package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.NoticeDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NoticeMapper {
    public List<NoticeDTO> selectAllNotice();
}
