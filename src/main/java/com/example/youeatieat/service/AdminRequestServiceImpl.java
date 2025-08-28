package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminRequestCriteriaDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.dto.RequestWithPaymentDTO;
import com.example.youeatieat.repository.AdminRequestDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminRequestServiceImpl implements AdminRequestService {
    private final AdminRequestDAO requestDAO;

    //    결제 목록
    @Override
    public AdminRequestCriteriaDTO getList(int page, String keyword) {
        AdminRequestCriteriaDTO requestCriteriaDTO = new AdminRequestCriteriaDTO();
        Criteria criteria = new Criteria(page, requestDAO.findCountAll(keyword));

        List<RequestWithPaymentDTO> requests = requestDAO.findRequestAll(criteria, keyword);

        criteria.setHasMore(requests.size() > criteria.getRowCount());

        if(criteria.isHasMore()){
            requests.remove(requests.size() - 1);
        }

        requestCriteriaDTO.setRequests(requests);
        requestCriteriaDTO.setCriteria(criteria);

        return requestCriteriaDTO;
    }
}
