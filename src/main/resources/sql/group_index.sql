use app;

create table tbl_group_index(
                          id bigint unsigned auto_increment primary key,
                          group_index_number bigint not null ,
                          product_id bigint unsigned not null ,
                          constraint fk_group_index_product foreign key (product_id)
                              references tbl_product(id)
);

insert into tbl_group_index (group_index_number, product_id) values (2,1);
# ALTER TABLE tbl_group_index
#     DROP INDEX group_index_number;
select * from tbl_group_index;
delete from tbl_group_index where id=4;
drop table tbl_group_index;

