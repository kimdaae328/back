package com.example.youeatieat.service;

import com.example.youeatieat.dto.MemberCriteriaDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.repository.MemberDAO;
import com.example.youeatieat.util.Criteria;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberDAO memberDAO;

    @Override
    public MemberCriteriaDTO getList(int page) {
        MemberCriteriaDTO postCriteriaDTO = new MemberCriteriaDTO();
        Criteria criteria = new Criteria(page, memberDAO.findCountAll());
        List<MemberDTO> posts = memberDAO.findMemberAll(criteria);
//        posts.forEach((post) -> {
//            post.setRelativeDate(DateUtils.toRelativeTime(post.getCreatedDatetime()));
//        });

        criteria.setHasMore(posts.size() > criteria.getRowCount());

//        11개 가져왔으면, 마지막 1개 삭제
        if(criteria.isHasMore()){
            posts.remove(posts.size() - 1);
        }

        postCriteriaDTO.setPosts(posts);
        postCriteriaDTO.setCriteria(criteria);
        return postCriteriaDTO;
    }
}
