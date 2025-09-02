use app;

create table tbl_review_image(
    id bigint unsigned auto_increment primary key,
    review_image_url varchar(255) ,
    review_image_sort_order int default 0,
    review_id bigint unsigned not null,
    review_image_status enum('active','inactive') default 'active',
    constraint fk_review_image_review foreign key (review_id)
                             references tbl_review(id)
);

select * from tbl_review_image;
