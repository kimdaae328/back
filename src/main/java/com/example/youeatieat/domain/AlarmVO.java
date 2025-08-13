package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;


@Getter @ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class AlarmVO extends Period {
    private Long id;
    private String alarmSender;
    private String alarmContent;
    private String addressPostNumber;
    private String alarm_date;
    private Long memberId;
}
