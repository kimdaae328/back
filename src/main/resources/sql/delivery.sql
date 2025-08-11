use app;

create table tbl_delivery(
                         id bigint unsigned auto_increment primary key,
                         delivery_status enum('completed', 'wait') default 'wait',
                         delivery_count int not null ,
                         product_id bigint unsigned not null,
                         request_id bigint unsigned not null,
                         created_date datetime default current_timestamp,
                         updated_date datetime default current_timestamp,
                         constraint fk_delivery_request foreign key (request_id)
                             references tbl_request(id),
                         constraint fk_delivery_product foreign key (product_id)
                             references tbl_product(id)
);


select * from tbl_delivery;

drop table tbl_delivery;

