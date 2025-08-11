use app;

create table tbl_group_index(
                          id bigint unsigned auto_increment primary key,
                          group_index_number bigint not null unique ,
                          product_id bigint unsigned not null,
                          constraint fk_group_index_product foreign key (product_id)
                              references tbl_product(id)
);


select * from tbl_group_index;

drop table tbl_group_index;