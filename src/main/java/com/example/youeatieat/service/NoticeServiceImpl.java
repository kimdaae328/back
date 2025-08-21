package com.example.youeatieat.service;

import com.example.youeatieat.dto.NoticeDTO;
import com.example.youeatieat.repository.NoticeDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Primary
public class NoticeServiceImpl implements NoticeService {
    @Autowired
    private NoticeDAO noticeDAO;

    @Override
    public List<NoticeDTO> findAll() {
        List<NoticeDTO> notices = noticeDAO.findAllNotice();
        return notices;
    }
}
