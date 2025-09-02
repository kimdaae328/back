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