use app;

create table tbl_group(
                          primary key (group_index_number, product_id),
                          group_index_number bigint not null ,
                          product_id bigint unsigned not null,
                          group_cancelable enum('able', 'unable') default 'able'
);


select * from tbl_group;

drop table tbl_group;