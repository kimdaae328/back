package com.example.youeatieat.dto;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Component
@Getter @Setter @ToString
@EqualsAndHashCode(of="id")
public class RecentDTO {
    private Long id;
    private int recentNumber;
    private Long memberId;
    private Long productId;
    private String createdDatetime;
    private String updatedDatetime;
}
