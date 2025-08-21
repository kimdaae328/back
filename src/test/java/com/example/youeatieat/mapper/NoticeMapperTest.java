package com.example.youeatieat.mapper;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Slf4j
public class NoticeMapperTest {

    @Autowired
    private NoticeMapper noticeMapper;

    @Test
    public void testFindAll() {
        noticeMapper.selectAllNotice();
        System.out.println(noticeMapper.selectAllNotice());
    }
}
