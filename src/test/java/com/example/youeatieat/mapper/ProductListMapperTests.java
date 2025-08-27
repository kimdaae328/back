package com.example.youeatieat.mapper;


import com.example.youeatieat.util.Search;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Arrays;

@SpringBootTest
@Slf4j
public class ProductListMapperTests {
    @Autowired
    private ProductMapper productMapper;

    @Test
    public void testSelectAll() {
        Search search = new Search();
        search.setMainCategories(new ArrayList<>(Arrays.asList("vegetables")));
        productMapper.countProduct(search);
    }

//    @Autowired
//    private ProductListMapper productListMapper;

//    @Test
//    public void testSelectAll() {
//        productListMapper.selectList();
//        log.info(productListMapper.selectList().toString());
//    }

}
