package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.Status;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter
@ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class BannerVO extends Period {
    private Long id;
    private String bannerImage;
    private int bannerOrder;
    private Status bannerStatus;
    private Long memberId;
}
