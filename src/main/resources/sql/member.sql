use app;

create table tbl_member(
    id bigint unsigned auto_increment primary key,
    member_email varchar(255) unique,
    member_kakao_email varchar(255),
    member_password varchar(255),
    member_name varchar(255),
    member_birth DATE,
    member_phone varchar(255),
    member_verified boolean default false,
    member_provider enum('kakao', 'you_i') default 'you_i',
    member_gender enum('male','female', 'not') default 'not',
    member_role enum('buyer','seller','admin') not null ,
    member_status enum('active','inactive') default 'active' not null,
    member_last_login_date datetime default null,
    created_date datetime default current_timestamp,
    updated_date datetime default current_timestamp
);
ALTER TABLE tbl_member
    ADD COLUMN member_verified BOOLEAN DEFAULT FALSE;
select * from tbl_member;

delete from tbl_member
where id = 13;

select m.id, m.member_name, m.member_email,
       m.member_phone, m.member_last_login_date, m.created_date, m.updated_date,
       ifnull(sp.subscription_payment_status, 'failed') as "subscription_payment_status"
from tbl_member m
         left join tbl_subscription_payment sp
                   on m.id = sp.member_id
where m.member_status = 'active' and m.member_role = 'buyer'
        order by m.id desc

select count(*)
from tbl_member
where member_status = 'active' and member_role = 'buyer'