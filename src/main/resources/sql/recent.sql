use app;

create table tbl_recent(
                           id bigint unsigned auto_increment primary key,
                           recent_number int not null,
                           member_id bigint unsigned not null,
                            product_id bigint unsigned not null,
                           created_date datetime default current_timestamp,
                           updated_date datetime default current_timestamp,
                           constraint fk_recent_member foreign key (member_id)
                               references tbl_member(id),
                           constraint fk_recent_product foreign key (product_id)
                               references tbl_product(id)
);


select * from tbl_recent;

drop table tbl_recent;

