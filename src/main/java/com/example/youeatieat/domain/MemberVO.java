package com.example.youeatieat.domain;

import com.example.youeatieat.audit.Period;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

import java.sql.Date;

@Getter @ToString(callSuper = true)
@SuperBuilder
@EqualsAndHashCode(of="id")
public class MemberVO extends Period {
//    id bigint unsigned auto_increment primary key,
//    member_email varchar(255) unique,
//    member_password varchar(255),
//    member_name varchar(255),
//    member_birth DATE,
//    member_phone varchar(255),
//    member_provider enum('kakao', 'you_i') default 'you_i',
//    member_gender enum('male','female', 'not') default 'not',
//    member_role enum('buyer','seller','admin') not null ,
//    member_status enum('active','inactive') default 'active' not null,
//    created_date datetime default current_timestamp,
//    updated_date datetime default current_timestamp

    private Long id;
    private String memberEmail;
    private String memberPassword;
    private String memberName;
    private Date memberBirthday;
}
