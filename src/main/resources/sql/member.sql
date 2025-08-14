use app;

create table tbl_member(
    id bigint unsigned auto_increment primary key,
    member_email varchar(255) unique,
    member_password varchar(255),
    member_name varchar(255),
    member_birth DATE,
    member_phone varchar(255),
    member_provider enum('kakao', 'you_i') default 'you_i',
    member_gender enum('male','female', 'not') default 'not',
    member_role enum('buyer','seller','admin') not null ,
    member_status enum('active','inactive') default 'active' not null,
    created_date datetime default current_timestamp,
    updated_date datetime default current_timestamp
);

select * from tbl_member;

drop table tbl_member;

insert into tbl_member (
    member_email,
    member_password,
    member_name,
    member_birth,
    member_phone,
    member_provider,
    member_gender,
    member_role,
    member_status
) values

# ('test1@gmail.com', '1234', '홍길동', '1990-05-21', '010-1234-5678', 'you_i', 'male', 'buyer', 'active'),
('oz@gmail.com', '1234', '우즈', '1978-07-25', '010-1234-7777', 'you_i', 'female', 'buyer', 'active')
# ('test4@gmail.com', '1234', '황또치', '2001-12-05', '010-5555-1234', 'you_i', 'female', 'seller', 'active'),
# ('test5@gmail.com', '1234', '정도우너', '1995-11-12', '010-3333-1234', 'you_i', 'female', 'buyer', 'active'),
# ('test6@gmail.com', '1234', '박마이콜', '1995-05-08', '010-4422-1234', 'you_i', 'male', 'buyer', 'active'),
# ('test7@gmail.com', '1234', '고길동', '1970-02-28', '010-1144-2233', 'you_i', 'male', 'seller', 'active')
# ('test2@gmail.com', '1234', '이순신', '1992-08-15', '010-9876-5432', 'you_i', 'female', 'seller', 'active'),
# ('kakao_user@gmail.com', '1234', '김영희', '1985-03-10', '010-1111-3333', 'kakao', 'male', 'buyer', 'active'),
# ('inactive_user@gmail.com', '1234', '김철수', '2000-12-25', '010-4444-5555', 'you_i', 'female', 'buyer', 'inactive'),
# ('admin@gmail.com', '1234', '관리자', '1980-01-01', '010-0000-0000', 'you_i', 'not', 'admin', 'active');
# DELETE FROM tbl_member
# WHERE id = 1;


