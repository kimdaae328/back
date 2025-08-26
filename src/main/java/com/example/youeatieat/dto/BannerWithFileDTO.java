package com.example.youeatieat.dto;

import com.example.youeatieat.enumeration.BannerStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@ToString @Setter
@EqualsAndHashCode(of = "id")
public class BannerWithFileDTO {
    private Long id;
    private BannerStatus bannerStatus;
    private int bannerOrder;
    private String createdDate;
    private String updatedDate;
    private String filePath;
    private String fileName;
    private String fileOriginalName;
    private String fileSize;
}
