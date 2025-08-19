package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.Status;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;


@Getter @ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class AddressVO extends Period {

    private Long id;
    private String address;
    private String addressDetail;
    private String addressPostNumber;
    private Status addressStatus;
    private Long memberId;
}
