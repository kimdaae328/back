use app;

create table tbl_request(
    id bigint unsigned auto_increment primary key,
    request_amount int not null ,
    request_price int not null ,
    request_status enum('done', 'cancel') default 'done'not null ,
    member_id bigint unsigned not null,
    group_index_number bigint not null,
    product_id bigint unsigned not null,
    constraint fk_request_member foreign key (member_id)
      references tbl_member(id),
    constraint fk_request_product foreign key (product_id)
      references tbl_product(id),
    constraint fk_request_group foreign key (group_index_number, product_id)
      references tbl_group(group_index_number, product_id)
);

select * from tbl_request;

drop table tbl_request;