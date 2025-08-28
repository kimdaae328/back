package com.example.youeatieat.util;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class Search {
    private List<String> mainCategories;
    private String priceKeyword;
//    private Long mainCategoryId;
    private String subCategoryName;
    private String month;
    private String keyword;
}
