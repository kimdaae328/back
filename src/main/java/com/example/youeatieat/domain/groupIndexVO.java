package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import com.example.youeatieat.enumeration.CancelableStatus;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;


@Getter @ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class groupIndexVO extends Period {
//    id bigint unsigned auto_increment primary key,
//    group_index_number bigint not null unique ,
//    product_id bigint unsigned not null,
    private Long id;
    private Long groupIndexNumber;
    private Long productId;
}
