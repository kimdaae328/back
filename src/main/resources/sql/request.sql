use app;

create table tbl_request(
    id bigint unsigned auto_increment primary key,
    request_amount int not null ,
    request_price int not null ,
    request_status enum('done', 'cancel') default 'done' not null ,
    member_id bigint unsigned not null,
    group_index_number bigint not null,
    product_id bigint unsigned not null,
    created_date datetime default current_timestamp,
    updated_date datetime default current_timestamp,
    constraint fk_request_member foreign key (member_id)
      references tbl_member(id),
    constraint fk_request_product foreign key (product_id)
      references tbl_product(id),
    constraint fk_request_group foreign key (group_index_number, product_id)
      references tbl_group(group_index_number, product_id)
);
INSERT INTO tbl_request
(request_amount, request_price, request_status, member_id, group_index_number, product_id)
VALUES
    (10, 500, 'done', 57, 1, 1),
    (5, 300, 'done', 57, 2, 2),
    (8, 400, 'cancel', 57, 4, 2);
select * from tbl_request;
