use app;

create table tbl_subscription_payment (
     id bigint unsigned auto_increment primary key,
     subscription_payment_price int not null ,
     member_id bigint unsigned not null,
     subscription_id bigint unsigned,
     subscription_payment_date DATETIME NOT NULL,
     subscription_payment_status ENUM('success', 'failed', 'refunded') NOT NULL,
     subscription_payment_method  VARCHAR(255) NOT NULL,
     created_date datetime default current_timestamp,
     updated_date datetime default current_timestamp,
     constraint fk_subscription_payment_member foreign key (member_id)
         references tbl_member(id),
     constraint fk_subscription_payment_subscription foreign key (subscription_id)
         references tbl_subscription(id)
);

select * from tbl_subscription_payment;

drop table tbl_subscription_payment;

insert into tbl_subscription_payment (
    subscription_payment_price,
    member_id,
    subscription_id,
    subscription_payment_date,
    subscription_payment_status,
    subscription_payment_method
)
select
    floor(rand() * 20000) + 5000 as subscription_payment_price,  -- 5,000 ~ 25,000 랜덤 금액
    m.id as member_id,
    floor(rand() * 3) + 1 as subscription_id,                    -- 1~3 구독 상품 랜덤
    now() as subscription_payment_date,
    elt(floor(rand() * 3) + 1, 'success', 'failed', 'refunded') as subscription_payment_status,
    elt(floor(rand() * 3) + 1, 'card', 'kakaopay', 'naverpay') as subscription_payment_method
from tbl_member m
where m.member_role = 'buyer';
