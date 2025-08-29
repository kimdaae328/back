package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminRequestCriteriaDTO;
import com.example.youeatieat.dto.MainPackDealDTO;

import java.util.List;

public interface MainService {
    //    특가 리스트
    public List<MainPackDealDTO> getPackDealsList();

    //    인기 리스트
    public List<MainPackDealDTO> getBestList();

}
