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

INSERT INTO tbl_review (review_content, review_status, member_id, request_id, product_id) VALUES
('리뷰 내용 1', 'active', 1, 49, 2),
('리뷰 내용 2', 'active', 2, 50, 2),
('리뷰 내용 3', 'active', 3, 51, 2),
('리뷰 내용 4', 'active', 4, 52, 2),
('리뷰 내용 5', 'active', 5, 53, 2),
('리뷰 내용 6', 'active', 6, 54, 2),
('리뷰 내용 7', 'active', 7, 49, 2),
('리뷰 내용 8', 'active', 1, 50, 2),
('리뷰 내용 9', 'active', 2, 51, 2),
('리뷰 내용 10', 'active', 3, 52, 2),
('리뷰 내용 11', 'active', 4, 53, 2),
('리뷰 내용 12', 'active', 5, 54, 2),
('리뷰 내용 13', 'active', 6, 49, 2),
('리뷰 내용 14', 'active', 7, 50, 2),
('리뷰 내용 15', 'active', 1, 51, 2),
('리뷰 내용 16', 'active', 2, 52, 2),
('리뷰 내용 17', 'active', 3, 53, 2),
('리뷰 내용 18', 'active', 4, 54, 2),
('리뷰 내용 19', 'active', 5, 49, 2),
('리뷰 내용 20', 'active', 6, 50, 2);



drop table tbl_review;