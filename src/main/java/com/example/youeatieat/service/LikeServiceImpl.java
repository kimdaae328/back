package com.example.youeatieat.service;

import com.example.youeatieat.dto.LikeDTO;
import com.example.youeatieat.repository.LikeDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Primary
public class LikeServiceImpl implements LikeService {
    private final LikeDAO likeDAO;

    @Override
    public void like(LikeDTO likeDTO) {
        likeDAO.likeProduct(toVO(likeDTO));
    }

    @Override
    public void unlike(LikeDTO likeDTO) {
        likeDAO.unlikeProduct(likeDTO);
    }

    @Override
    public boolean getLike(LikeDTO likeDTO) {
        return likeDAO.getLike(likeDTO);
    }


    @Override
    public List<LikeDTO> getLikeListByMemberId(Long memberId) {

        return likeDAO.selectLikeByMemberId(memberId);
    }
}
