package com.example.youeatieat.service;

import com.example.youeatieat.common.exception.NoProductException;
import com.example.youeatieat.dto.LikeDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.dto.ProductCriteriaDTO;
import com.example.youeatieat.dto.ProductDTO;
import com.example.youeatieat.repository.BestProductDAO;
import com.example.youeatieat.repository.CategoryDAO;
import com.example.youeatieat.repository.LikeDAO;
import com.example.youeatieat.repository.ProductDAO;
import com.example.youeatieat.util.Criteria;
import com.example.youeatieat.util.Search;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Primary
public class BestProductServiceImpl implements BestProductService{
    private final BestProductDAO  bestProductDAO;
    private final LikeDAO likeDAO;
    private final CategoryDAO categoryDAO;
    private HttpSession session;

    //    목록 조회
    @Override
    public ProductCriteriaDTO getList(int page, Search search) {
        ProductCriteriaDTO productCriteriaDTO = new ProductCriteriaDTO();
        Criteria criteria = new Criteria(page, bestProductDAO.countProduct(search));
        criteria.setRowCount(9);
        criteria.setCount(criteria.getRowCount() + 1);
        criteria.setRealEnd((int)(Math.ceil(criteria.getTotal() / (double)criteria.getRowCount())));
        criteria.setOffset((page - 1) * criteria.getRowCount());

        List<ProductDTO> products = bestProductDAO.getList(criteria, search);

        products.forEach(product -> {
            String[] arData = null;

            Object[] categoryNames = bestProductDAO.goDetail(product.getId())
                            .stream().map((category -> category.getMainCategoryNames())).toArray();
            arData = new String[categoryNames.length];

            for (int i=0; i<categoryNames.length; i++) {
                arData[i] = String.valueOf(categoryNames[i]);
            }

            productCriteriaDTO.setArCategoryName(arData);
        });

        criteria.setHasMore(products.size() == criteria.getRowCount() + 1);
//        10개 가져왔으면, 마지막 1개 삭제
        if(criteria.isHasMore()){
            products.remove(products.size() - 1);
        }
        productCriteriaDTO.setCategories(categoryDAO.getCategories());
        productCriteriaDTO.setProducts(products);
        productCriteriaDTO.setCriteria(criteria);

        return productCriteriaDTO;
    }


    //    아이디로 상세 조회(목록에서 상세로 이동)
    @Override
    public Optional<ProductDTO> goDetail(Long id) {
        Optional<ProductDTO> foundProduct = bestProductDAO.goDetail(id);
        ProductDTO productDTO = foundProduct.orElseThrow(NoProductException::new);
//        MemberDTO memberDTO = (MemberDTO) session.getAttribute("memberDTO");
        LikeDTO likeDTO = new LikeDTO();
        likeDTO.setProductId(id);
//        likeDTO.setMemberId(memberDTO.getId());
        likeDTO.setMemberId(2L);
        productDTO.setLikeStatus(likeDAO.getLike(likeDTO));
        return Optional.of(productDTO);
    }

    @Override
    public int getCount(Search search) {
        return bestProductDAO.countProduct(search);
    }
}
