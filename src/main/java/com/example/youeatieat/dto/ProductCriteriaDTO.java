package com.example.youeatieat.dto;

import com.example.youeatieat.util.Criteria;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
@Setter
@ToString
public class ProductCriteriaDTO {
    private List<ProductDTO> products;
    private Criteria criteria;
    private String[] arCategoryName;
    private List<CategoryDTO> categories;
    private int totalCount;
}
