package com.example.youeatieat.mapper;

import com.example.youeatieat.dto.AdminSellerCriteriaDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.dto.MemberWithAddressDTO;
import com.example.youeatieat.service.AdminSellerService;
import com.example.youeatieat.util.Criteria;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@Slf4j
public class AdminCustomerMapperTests {
//    @Autowired
//    private AdminCustomerMapper MemberListMapper;
//
//    @Test
//    public void testSelectMemberAll(){
//        Criteria criteria = new Criteria(1, 128);
//        log.info(criteria.toString());
//        MemberListMapper.selectMemberAll(criteria).stream().map(MemberDTO::toString).forEach(log::info);
//    }

//    주소확인
//    @Autowired
//    private AdminSellerMapper adminSellerMapper;
//
//    @Test
//    void testSelectSellerAll() {
//        Criteria criteria = new Criteria(1, 10);
//        List<MemberDTO> sellers = adminSellerMapper.selectSellerAll(criteria);
//
//        sellers.forEach(System.out::println);
//
//    }

//    일반 회원 목록 확인
//    @Autowired
//    private AdminSellerService adminSellerService;
//
//    @Test
//    void testGetSellerYoueatieatList() {
//        int page = 1;
//
//        AdminSellerCriteriaDTO result = adminSellerService.getSellerYoueatieatList(page);
//
//        System.out.println("페이지 번호: " + result.getCriteria().getPage());
//        System.out.println("조회된 데이터 수: " + result.getSellers().size());
//        System.out.println("hasMore: " + result.getCriteria().isHasMore());
//
//        result.getSellers().forEach(seller -> {
//            System.out.println("판매자 이름: " + seller.getMemberName());
//            System.out.println("판매자 이메일: " + seller.getMemberEmail());
//            System.out.println("판매자 상태: " + seller.getMemberStatus());
//            System.out.println("-------------------------------");
//        });
//    }

//    view로 바꾸고 확인
    @Autowired
    private AdminSellerMapper adminSellerMapper;

    @Test
    void testViewMemberProviderAddress() {
        List<MemberDTO> result = adminSellerMapper.selectSellerAll(new Criteria(1, 20));

        System.out.println("조회된 데이터 수: " + result.size());

        result.forEach(r -> {
            System.out.println("회원 ID: " + r.getId());
            System.out.println("이메일: " + r.getMemberEmail());
            System.out.println("이름: " + r.getMemberName());
            System.out.println("전화번호: " + r.getMemberPhone());
            System.out.println("역할: " + r.getMemberRole());
            System.out.println("상태: " + r.getMemberStatus());
            System.out.println("제공자: " + r.getProvider());
            System.out.println("주소: " + r.getAddress());
            System.out.println("주소상세: " + r.getAddressDetail());
            System.out.println("우편번호: " + r.getAddressPostNumber());
            System.out.println("=======================================");
        });
    }
}