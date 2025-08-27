package com.example.youeatieat.service;

import com.example.youeatieat.dto.CategoryDTO;
import com.example.youeatieat.repository.CategoryDAO;
import com.example.youeatieat.repository.SubCategoryDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Primary
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryDAO categoryDAO;
    @Autowired
    private SubCategoryDAO  subCategoryDAO;

    @Override
    public Optional<CategoryDTO> getOneCategories(Long id) {
        return categoryDAO.selectCategoryById(id)
                .map(cat -> {
                    cat.setSubCategoryNames(subCategoryDAO.findSubCategory(id));
                    return cat;
                });
    }
}
