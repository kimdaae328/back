package com.example.youeatieat.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(of="id")
public class NoticeDTO {
    private Long id;
    private String noticeTitle;
    private String noticeContent;
    private String noticeWriter;
    private String createdDatetime;
    private String updatedDatetime;
}
