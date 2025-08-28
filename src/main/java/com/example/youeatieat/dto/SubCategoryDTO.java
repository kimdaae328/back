package com.example.youeatieat.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubCategoryDTO {
    private Long id;
    private String subCategoryName;
}
