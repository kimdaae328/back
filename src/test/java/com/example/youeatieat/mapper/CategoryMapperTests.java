package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.repository.CategoryDAO;
import com.example.youeatieat.repository.SubCategoryDAO;
import com.example.youeatieat.service.CartService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@Slf4j
@SpringBootTest
public class CategoryMapperTests {
    @Autowired
    private SubCategoryDAO subCategoryDAO;
    @Autowired
    private CategoryDAO categoryDAO;

    @Test
    public void selectSubCategoryById() {
        System.out.println(subCategoryDAO.findSubCategory(1L));;
    }

    @Test
    public void selectSubCategoryById2() {
        categoryDAO.selectCategoryById(1L);
        System.out.println(categoryDAO.selectCategoryById(1L));
    }
}
