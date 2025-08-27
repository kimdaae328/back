package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.Status;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter
@ToString @Setter
@EqualsAndHashCode(of = "id")
public class BannerDTO {
    private Long id;
    private String bannerImage;
    private int bannerOrder;
    private Status bannerStatus;
    private Long memberId;
    private String createdDatetime;
    private String updatedDatetime;
}
