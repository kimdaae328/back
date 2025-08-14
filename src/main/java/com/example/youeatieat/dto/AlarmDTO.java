package com.example.youeatieat.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString @Setter
@EqualsAndHashCode(of = "id")
public class AlarmDTO {
    private Long id;
    private String alarmSender;
    private String alarmContent;
    private String addressPostNumber;
    private String alarmDate;
    private Long memberId;
    private String createdDatetime;
    private String updatedDatetime;
}
