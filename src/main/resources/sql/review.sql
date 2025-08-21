use app;

create table tbl_review(
    id bigint unsigned auto_increment primary key,
    review_content varchar(255) not null ,
    review_status enum('active','inactive') default 'active',
    member_id bigint unsigned not null,
    request_id bigint unsigned not null,
    product_id bigint unsigned not null,
    created_date datetime default current_timestamp,
    updated_date datetime default current_timestamp,
    constraint fk_review_member foreign key (member_id)
       references tbl_member(id),
    constraint fk_review_request foreign key (request_id)
       references tbl_request(id),
    constraint fk_review_product foreign key (product_id)
       references tbl_product(id)
);

select * from tbl_review;


drop table tbl_review;