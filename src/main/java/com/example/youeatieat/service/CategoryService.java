package com.example.youeatieat.service;

import com.example.youeatieat.dto.CategoryDTO;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    public Optional<CategoryDTO> getOneCategories(Long id);
}
