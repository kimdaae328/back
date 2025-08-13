use app;

create table tbl_product(
                            id bigint unsigned auto_increment primary key,
                            product_name varchar(255) not null ,
                            product_price int not null ,
                            product_quantity varchar(255) not null ,
                            product_category enum('vegetables','fruits','fisheries','butchers','etc') not null ,
                            product_title_image_url varchar(255) not null ,
                            product_info_image_url varchar(255) not null ,
                            product_min_number int not null,
                            product_status enum('active','inactive') default 'active',
                            member_id bigint unsigned not null,
                            created_date datetime default current_timestamp,
                            updated_date datetime default current_timestamp,
                            constraint fk_product_member foreign key (member_id)
                                references tbl_member(id)
);

alter table tbl_product modify product_category enum('vegetables','fruits','fisheries','butchers','etc') not null;

select * from tbl_product;

insert into app.tbl_product(
product_name, product_price, product_quantity, product_category, product_title_image_url, product_info_image_url, product_min_number, member_id
)
values ('포도', '10000','1.5kg','fruits','img~~','img~~','3','1');

drop table tbl_product;
