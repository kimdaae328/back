package com.example.youeatieat.service;

import com.example.youeatieat.dto.AdminCustomerCriteriaDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.repository.AdminCustomerDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminCustomerServiceImpl implements AdminCustomerService {
    private final AdminCustomerDAO memberDAO;

    @Override
    public AdminCustomerCriteriaDTO getList(int page) {
        AdminCustomerCriteriaDTO customerCriteriaDTO = new AdminCustomerCriteriaDTO();
        Criteria criteria = new Criteria(page, memberDAO.findCountAll());
        List<MemberDTO> customers = memberDAO.findCustomerAll(criteria);
//        customers.forEach((post) -> {
//            post.setRelativeDate(DateUtils.toRelativeTime(post.getCreatedDatetime()));
//        });

        criteria.setHasMore(customers.size() > criteria.getRowCount());

//        11개 가져왔으면, 마지막 1개 삭제
        if(criteria.isHasMore()){
            customers.remove(customers.size() - 1);
        }

        customerCriteriaDTO.setCustomers(customers);
        customerCriteriaDTO.setCriteria(criteria);
        return customerCriteriaDTO;
    }
}
