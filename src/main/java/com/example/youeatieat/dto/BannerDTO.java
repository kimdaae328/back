package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.BannerStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@ToString @Setter
@EqualsAndHashCode(of = "id")
public class BannerDTO {
    private Long id;
    private int bannerOrder;
    private String createdDate;
    private String updatedDate;
    private List<FileDTO> files;
}
