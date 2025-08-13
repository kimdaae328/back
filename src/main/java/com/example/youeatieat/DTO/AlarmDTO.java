package com.example.youeatieat.DTO;

import com.example.youeatieat.common.enumeration.Status;
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
    private String alarm_date;
    private Long memberId;
    private String createdDatetime;
    private String updatedDatetime;
}
