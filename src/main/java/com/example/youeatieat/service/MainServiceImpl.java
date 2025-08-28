package com.example.youeatieat.service;

import com.example.youeatieat.dto.MainPackDealDTO;
import com.example.youeatieat.repository.MainDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MainServiceImpl implements MainService {
    private final MainDAO mainDAO;

    //    특가 리스트
    @Override
    public List<MainPackDealDTO> getPackDealsList() {
        List<MainPackDealDTO> mainPackDealDTOList = mainDAO.findPackDealAll();

        return mainPackDealDTOList;
    }

    //    인기 리스트
    @Override
    public List<MainPackDealDTO> getBestList() {
        List<MainPackDealDTO> mainPackDealDTOList = mainDAO.findBestAll();

        return mainPackDealDTOList;
    }
}
