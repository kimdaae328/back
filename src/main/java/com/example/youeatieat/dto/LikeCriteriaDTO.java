package com.example.youeatieat.dto;

import com.example.youeatieat.util.Criteria;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Controller;

import java.util.List;
@Controller
@Getter
@Setter
@ToString
public class LikeCriteriaDTO {
    private List<LikeDTO> likes;
    private Criteria criteria;
}
