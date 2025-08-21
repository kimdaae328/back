package com.example.youeatieat.service;

import com.example.youeatieat.common.exception.NoProductException;
import com.example.youeatieat.dto.LikeDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.repository.LikeDAO;
import com.example.youeatieat.repository.ProductDAO;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Primary
public class ProductServiceImpl implements ProductService{
    private final ProductDAO productDAO;
    private final LikeDAO likeDAO;
    private HttpSession session;

    //    목록 조회
    public List<ProductDTO> getList() {
        List<ProductDTO> products = productDAO.getList();
//        MemberDTO memberDTO = (MemberDTO) session.getAttribute("memberDTO");
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setId(2L);
        return products;
    }

    //    아이디로 상세 조회(목록에서 상세로 이동)
    public Optional<ProductDTO> goDetail(Long id) {
        Optional<ProductDTO> foundProduct = productDAO.goDetail(id);
        ProductDTO productDTO = foundProduct.orElseThrow(NoProductException::new);
//        MemberDTO memberDTO = (MemberDTO) session.getAttribute("memberDTO");
        LikeDTO likeDTO = new LikeDTO();
        likeDTO.setProductId(id);
//        likeDTO.setMemberId(memberDTO.getId());
        likeDTO.setMemberId(2L);
        productDTO.setLikeStatus(likeDAO.getLike(likeDTO));
        return Optional.of(productDTO);
    }
}
