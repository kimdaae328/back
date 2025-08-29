package com.example.youeatieat.repository;

import com.example.youeatieat.dto.MainPackDealDTO;
import com.example.youeatieat.dto.RequestWithPaymentDTO;
import com.example.youeatieat.mapper.AdminRequestMapper;
import com.example.youeatieat.mapper.MainMapper;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MainDAO {
    private final MainMapper mainMapper;

    //    특가 리스트
    public List<MainPackDealDTO> findPackDealAll() {
        return mainMapper.selectPackDealAll();
    }

    //    인기 리스트
    public List<MainPackDealDTO> findBestAll() {
        return mainMapper.selectBestAll();
    }

}
