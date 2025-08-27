package com.example.youeatieat.service;

import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.CartDTO;
import com.example.youeatieat.mapper.CartMapper;
import com.example.youeatieat.repository.BannerDAO;
import com.example.youeatieat.repository.CartDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Primary
public class BannerServiceImpl implements BannerService {
    @Autowired
    BannerDAO bannerDAO;


    @Override
    public List<BannerDTO> findAll() {
        return bannerDAO.AllBanner();
    }
}
