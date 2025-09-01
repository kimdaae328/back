package com.example.youeatieat.service;

import com.example.youeatieat.domain.RequestVO;
import com.example.youeatieat.dto.RequestCriteriaDTO;
import com.example.youeatieat.dto.RequestDTO;
import com.example.youeatieat.util.MypageSearch;

public interface RequestService {
    public RequestCriteriaDTO getList(int page, MypageSearch search);



}
