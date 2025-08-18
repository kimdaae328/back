use app;

create table tbl_like(
     id bigint unsigned auto_increment primary key,
     product_id bigint unsigned not null,
     member_id bigint unsigned not null,
     created_date datetime default current_timestamp,
     updated_date datetime default current_timestamp,
     constraint fk_like_member foreign key (member_id)
         references tbl_member(id),
     constraint fk_like_product foreign key (product_id)
         references tbl_product(id)
);


select * from tbl_like;


drop table tbl_like;

