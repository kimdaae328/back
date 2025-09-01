package com.example.youeatieat.service;

import com.example.youeatieat.domain.RequestVO;
import com.example.youeatieat.dto.RequestCriteriaDTO;
import com.example.youeatieat.dto.RequestDTO;
import com.example.youeatieat.repository.RequestDAO;
import com.example.youeatieat.util.Criteria;
import com.example.youeatieat.util.MypageSearch;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Primary
public class RequestServiceImpl implements RequestService{
    private final RequestDAO requestDAO;


    @Override
    public RequestCriteriaDTO getList(int page, MypageSearch search) {
        RequestCriteriaDTO requestCriteriaDTO = new RequestCriteriaDTO();
        Criteria criteria = new Criteria(page,requestDAO.findCountAll(search));
        List<RequestDTO> requests = requestDAO.findAll(criteria,search);
        criteria.setHasMore(requests.size()>criteria.getRowCount());
        if(criteria.isHasMore()){
            requests.remove(requests.size() - 1);
        }

        requestCriteriaDTO.setRequests(requests);
        requestCriteriaDTO.setCriteria(criteria);
        return requestCriteriaDTO;
    }


}
