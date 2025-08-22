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
INSERT INTO tbl_product
(id,product_name, product_price, product_quantity, product_category, product_title_image_url, product_info_image_url, product_min_number, product_status, member_id)
VALUES

    ('4','루꼴라', 700, '1.0g', 'vegetables', '/images/product-images/lucola.jpg,',  '/images/product-images/lucola_info.jpg', 10, 'active', 32),
    ('5','고등어', 3000, '6.3g', 'fisheries', '/images/product-images/mackerel.jpg', '/images/product-images/mackerel_info.jpg', 2, 'active', 32),
    ('6', '항정살', 5000,'2.0g', 'butchers', '/images/product-images/pork_cutlet.jpeg', '/images/product-images/pork_cutlet_info.jpeg', 6, 'active', 32);

select * from tbl_product;

delete from tbl_product

where id = 13;


