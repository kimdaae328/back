package com.example.youeatieat.repository;

import com.example.youeatieat.dto.NoticeDTO;
import com.example.youeatieat.mapper.NoticeMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class NoticeDAO {
    private final NoticeMapper noticeMapper;

//    공지 전체 확인
    public List<NoticeDTO> findAllNotice() {return noticeMapper.selectAllNotice();}

}
