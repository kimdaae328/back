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

select * from tbl_product;

SELECT *
FROM tbl_product
WHERE product_status = 'active'
  AND main_category_id = 1
  AND sub_category_name = '잎채소';

select p1.*, p2.c from tbl_product p1
                           join
                       (
                           select product_id, count(*) c from tbl_cart
                           where created_date >= DATE_ADD(NOW(), INTERVAL -1 WEEK)
                           group by product_id
                       ) p2
                       on p1.id = p2.product_id
order by p2.c desc
limit 8 offset 0;

select p1.* from tbl_product p1
                     join
                 (
                     select product_id, count(*) c from tbl_like
                     group by product_id
                 ) p2
                 on p1.id = p2.product_id
order by p2.c desc
limit 10 offset 0;