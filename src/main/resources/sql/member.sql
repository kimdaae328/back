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

select * from tbl_member;
delete from tbl_member where id=15;

drop table tbl_member;

insert into tbl_member (
    member_email,
                        member_kakao_email,
    member_password,
    member_name,
    member_birth,
    member_phone,
    member_provider,
    member_gender,
    member_role,
    member_status
) values
      ('iuu@gmail.com', 'test1234@kakao.com','1234', '아이유', '1993-05-16', '010-1111-2222', 'you_i', 'female', 'buyer', 'active');


# alter table tbl_member add member_last_login_datetime datetime default null after member_status;
# alter table tbl_member change member_last_login_datetime member_last_login_date datetime default null;

UPDATE tbl_member
SET member_last_login_date = '2025-05-16 21:11:02'
WHERE id = 15;


