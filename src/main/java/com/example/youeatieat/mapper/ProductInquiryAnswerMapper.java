package com.example.youeatieat.mapper;

import com.example.youeatieat.domain.ProductInquiryAnswerVO;
import com.example.youeatieat.domain.ProductInquiryVO;
import com.example.youeatieat.dto.ProductInquiryAnswerDTO;
import com.example.youeatieat.dto.ProductInquiryDTO;
import com.example.youeatieat.util.Criteria;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface ProductInquiryAnswerMapper {
//    문의 답변 조회
    public List<ProductInquiryAnswerDTO> selectAnswerById(Long id);

}
