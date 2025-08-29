use app;

create table tbl_product(
                            id bigint unsigned auto_increment primary key,
                            product_name varchar(255) not null ,
                            product_price int not null ,
                            product_quantity varchar(255) not null ,
                            product_title_image_url varchar(255) not null ,
                            product_info_image_url varchar(255) not null ,
                            product_min_number int not null,
                            product_status enum('active','inactive') default 'active',
                            sub_category_name varchar(255),
                            member_id bigint unsigned not null,
                            main_category_id bigint unsigned not null,
                            created_date datetime default current_timestamp,
                            updated_date datetime default current_timestamp,
                            constraint fk_product_member foreign key (member_id)
                                references tbl_member(id),
                            constraint fk_product_main_category foreign key (main_category_id)
                                references tbl_main_category(id)
);
