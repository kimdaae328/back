use app;

create table tbl_group_index(
                          id bigint unsigned auto_increment primary key,
                          group_index_number bigint not null unique ,
                          product_id bigint unsigned not null,
                          constraint fk_group_index_product foreign key (product_id)
                              references tbl_product(id)
);


select * from tbl_group_index;

INSERT INTO tbl_group_index (group_index_number, product_id)
VALUES
    (1001, 1),
    (1002, 2),
    (1003, 3),
    (1004, 1),
    (1005, 2);

drop table tbl_group_index;