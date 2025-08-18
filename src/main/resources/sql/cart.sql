use app;

create table tbl_cart(
                         id bigint unsigned auto_increment primary key,
                         cart_status enum('active', 'inactive') default 'inactive',
                         cart_count int not null ,
                         product_id bigint unsigned not null,
                         member_id bigint unsigned not null,
                         created_date datetime default current_timestamp,
                         updated_date datetime default current_timestamp,
                         constraint fk_cart_member foreign key (member_id)
                             references tbl_member(id),
                         constraint fk_cart_product foreign key (product_id)
                             references tbl_product(id)
);

select * from tbl_cart;

drop table tbl_cart;

