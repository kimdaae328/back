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
# 기존에 크리에이티드 데이트 업데이트 데이트없어서 넣음
ALTER TABLE tbl_request
    ADD COLUMN created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN updated_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
INSERT INTO tbl_request
(request_amount, request_price, request_status, member_id, group_index_number, product_id)
VALUES
    (10, 600, 'done', 57, 1, 1),
    (5, 500, 'done', 57, 1, 3),
    (8, 700, 'cancel', 57, 4, 2);
select * from tbl_request;

delete from tbl_request where id=18;


UPDATE tbl_request
SET created_date = '2025-08-24 12:00:00'
WHERE id = 18;
