package com.example.youeatieat.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter
@ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")

public class BannerVO {
    private Long id;
    private int bannerOrder;
}
