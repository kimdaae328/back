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
(product_name, product_price, product_quantity, product_category, product_title_image_url, product_info_image_url, product_min_number, product_status, member_id)
VALUES
    ('Apple', 3000, '1kg', 'fruits', 'https://example.com/apple_title.jpg', 'https://example.com/apple_info.jpg', 1, 'active', 55),
    ('Carrot', 1500, '500g', 'vegetables', 'https://example.com/carrot_title.jpg', 'https://example.com/carrot_info.jpg', 2, 'active', 55),
    ('Salmon', 12000, '1kg', 'fisheries', 'https://example.com/salmon_title.jpg', 'https://example.com/salmon_info.jpg', 1, 'active', 55),
    ('Beef', 20000, '500g', 'butchers', 'https://example.com/beef_title.jpg', 'https://example.com/beef_info.jpg', 1, 'active', 55),
    ('Banana', 2500, '1kg', 'fruits', 'https://example.com/banana_title.jpg', 'https://example.com/banana_info.jpg', 1, 'active', 55);
select * from tbl_product;

update tbl_product
set
    product_info_image_url = '/images/product-images/grape_info.jpg'
where id = 2;


