package com.example.youeatieat.service;

import com.example.youeatieat.domain.CartVO;
import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.CartDTO;

import java.util.List;

public interface BannerService {

    public List<BannerDTO> findAll();

}
