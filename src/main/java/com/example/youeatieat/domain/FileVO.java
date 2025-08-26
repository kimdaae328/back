package com.example.youeatieat.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter
@ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class FileVO {
    private Long id;
    private String filePath;
    private String fileName;
    private String fileOriginal_name;
    private String fileSize;
}
