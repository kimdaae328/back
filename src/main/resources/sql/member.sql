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
    member_last_login_date datetime default null,
    created_date datetime default current_timestamp,
    updated_date datetime default current_timestamp
);

select * from tbl_member;
delete from tbl_member where id=15;


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
    member_status,
    member_last_login_date
) values
      ('iuu@gmail.com', '1234', '아이유', '1993-05-16', '010-1111-2222', 'you_i', 'female', 'buyer', 'active', '2025-08-05'),
      ('jimin_bts@gmail.com', '1234', '지민', '1995-10-13', '010-3333-4444', 'kakao', 'male', 'seller', 'active', '2025-03-08'),
      ('rose_bp@gmail.com', '1234', '로제', '1997-02-11', '010-5555-6666', 'you_i', 'female', 'buyer', 'active', '2025-04-09'),
      ('jk_bts@gmail.com', '1234', '정국', '1997-09-01', '010-7777-8888', 'you_i', 'male', 'buyer', 'active', '2025-05-15'),
      ('jisoo_bp@gmail.com', '1234', '지수', '1995-01-03', '010-2222-9999', 'you_i', 'female', 'seller', 'active', '2025-04-01'),
      ('kai_exo@gmail.com', '1234', '카이', '1994-01-14', '010-6666-1111', 'kakao', 'male', 'seller', 'active', '2025-03-01'),
      ('taeyeon_snsd@gmail.com', '1234', '태연', '1989-03-09', '010-8888-2222', 'you_i', 'female', 'buyer', 'active', '2025-04-01'),
      ('rm_bts@gmail.com', '1234', 'RM', '1994-09-12', '010-9999-3333', 'you_i', 'male', 'seller', 'active', '2025-08-03'),
      ('suzy@gmail.com', '1234', '수지', '1994-10-10', '010-4444-5555', 'you_i', 'female', 'buyer', 'active', '2025-08-04'),
      ('baekhyun_exo@gmail.com', '1234', '백현', '1992-05-06', '010-7777-9999', 'you_i', 'male', 'buyer', 'active', '2025-08-01'),
      ('lisa_bp@gmail.com', '1234', '리사', '1997-03-27', '010-2222-4444', 'you_i', 'female', 'buyer', 'active', '2025-08-16'),
      ('v_bts@gmail.com', '1234', '뷔', '1995-12-30', '010-5555-8888', 'you_i', 'male', 'seller', 'active', '2025-08-01'),
      ('taemin_shinee@gmail.com', '1234', '태민', '1993-07-18', '010-3333-7777', 'you_i', 'male', 'buyer', 'active', '2025-08-05'),
      ('jennie_bp@gmail.com', '1234', '제니', '1996-01-16', '010-6666-5555', 'you_i', 'female', 'buyer', 'active', '2025-08-07'),
      ('key_shinee@gmail.com', '1234', '키', '1991-09-23', '010-1111-6666', 'kakao', 'male', 'seller', 'active', '2025-04-13'),
      ('joy_rv@gmail.com', '1234', '조이', '1996-09-03', '010-8888-4444', 'you_i', 'female', 'seller', 'active', '2025-07-17'),
      ('taeyong_nct@gmail.com', '1234', '태용', '1995-07-01', '010-4444-2222', 'you_i', 'male', 'buyer', 'active', '2025-06-15'),
      ('irene_rv@gmail.com', '1234', '아이린', '1991-03-29', '010-9999-7777', 'kakao', 'female', 'seller', 'active', '2025-03-21'),
      ('mingyu_sv@gmail.com', '1234', '민규', '1997-04-06', '010-7777-3333', 'you_i', 'male', 'buyer', 'active', '2025-05-01'),
      ('karina_ae@gmail.com', '1234', '카리나', '2000-04-11', '010-2222-1111', 'you_i', 'female', 'seller', 'active','2025-08-11');


# alter table tbl_member add member_last_login_datetime datetime default null after member_status;
# alter table tbl_member change member_last_login_datetime member_last_login_date datetime default null;

UPDATE tbl_member
SET member_last_login_date = '2025-05-16 21:11:02'
WHERE id = 15;


