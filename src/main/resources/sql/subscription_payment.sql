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