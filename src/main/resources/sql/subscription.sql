use app;

create table tbl_subscription(
   id bigint unsigned auto_increment primary key,
   subscription_start_date DATE not null ,
   subscription_end_date DATE not null ,
   subscription_status enum('active','cancelled') default 'active',
   created_date datetime default current_timestamp,
   updated_date datetime default current_timestamp
);

select * from tbl_subscription;

insert into tbl_subscription (subscription_start_date, subscription_end_date, subscription_status)
values ('2025-08-22','2025-09-22','active');

drop table tbl_subscription;