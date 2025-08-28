package com.example.youeatieat.domain;

import com.example.youeatieat.enumeration.BannerStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter
@ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class BannerFileVO {
    private Long id;
    private Long bannerId;
    private Long fileId;
}
