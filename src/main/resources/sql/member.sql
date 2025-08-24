use app;

create table tbl_member(
    id bigint unsigned auto_increment primary key,
    member_email varchar(255) unique,
    member_kakao_email varchar(255),
    member_password varchar(255),
    member_name varchar(255),
    member_birth DATE,
    member_phone varchar(255),
    member_provider enum('kakao', 'you_i') default 'you_i',
    member_gender enum('male','female', 'not') default 'not',
    member_role enum('buyer','seller','admin') not null ,
    member_status enum('active','inactive') default 'active' not null,
    member_last_login_date datetime default null,
    created_date datetime default current_timestamp,
    updated_date datetime default current_timestamp
);

select * from tbl_member
where member_role = 'seller';


