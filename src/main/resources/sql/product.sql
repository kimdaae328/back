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

alter table tbl_product
    drop column product_category;

alter table tbl_product
    add column main_category_id bigint unsigned,
    add constraint fk_product_main foreign key (main_category_id)
        references tbl_main_category(id);


update tbl_product set main_category_id = 2 where id = 1;
update tbl_product set main_category_id = 2 where id = 2;
update tbl_product set main_category_id = 2 where id = 3;
update tbl_product set main_category_id = 1 where id = 4;
update tbl_product set main_category_id = 3 where id = 5;
update tbl_product set main_category_id = 4 where id = 6;
update tbl_product set main_category_id = 1 where id = 7;
update tbl_product set main_category_id = 1 where id = 8;
update tbl_product set main_category_id = 1 where id = 9;
update tbl_product set main_category_id = 2 where id = 10;
update tbl_product set main_category_id = 2 where id = 11;
update tbl_product set main_category_id = 2 where id = 12;
update tbl_product set main_category_id = 3 where id = 13;
update tbl_product set main_category_id = 3 where id = 14;
update tbl_product set main_category_id = 3 where id = 15;
update tbl_product set main_category_id = 4 where id = 16;
update tbl_product set main_category_id = 4 where id = 17;
update tbl_product set main_category_id = 4 where id = 18;
update tbl_product set main_category_id = 5 where id = 19;


alter table tbl_product
    modify column main_category_id bigint unsigned not null;

alter table tbl_product
    add column sub_category_name varchar(255);


-- 과일·견과·쌀
update tbl_product set sub_category_name = '제철과일' where id in (1,2,10,11,12);
update tbl_product set sub_category_name = '열대과일' where id = 3;

-- 채소 (대카 '채소'이지만 소카테고리 테이블에 아직 없으므로 이름만 입력)
update tbl_product set sub_category_name = '잎채소' where id = 4;
update tbl_product set sub_category_name = '뿌리채소' where id = 7;
update tbl_product set sub_category_name = '과채류' where id = 8;
update tbl_product set sub_category_name = '잎채소' where id = 9;

-- 수산·해산·건어물
update tbl_product set sub_category_name = '생선' where id in (5,14,15);
update tbl_product set sub_category_name = '해산물' where id = 13;

-- 정육·가공육·달걀
update tbl_product set sub_category_name = '돼지고기' where id in (6,17,18);
update tbl_product set sub_category_name = '소고기' where id = 16;

-- 기타
update tbl_product set sub_category_name = '장류' where id = 19;

