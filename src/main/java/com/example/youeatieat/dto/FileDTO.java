package com.example.youeatieat.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter
@ToString
@EqualsAndHashCode(of="id")
public class FileDTO {
    private Long id;
    private String filePath;
    private String fileName;
    private String fileOriginalName;
    private String fileSize;
    private String createdDate;
    private String updatedDate;
}
