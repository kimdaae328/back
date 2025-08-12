package com.example.youeatieat.config.mybatis.converter;

import org.springframework.core.convert.converter.Converter;
import com.example.youeatieat.enumeration.ProductCategory;
import org.springframework.stereotype.Component;

@Component
public class ProductCategoryConverter implements Converter<String, ProductCategory> {

    @Override
    public ProductCategory convert(String source) {
        return ProductCategory.getProductStatusFromValue(source);
    }
}
