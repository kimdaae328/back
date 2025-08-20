use app;

create table tbl_purchase_request(
   id bigint unsigned auto_increment primary key,
   purchase_request_product_name varchar(255) not null,
   purchase_request_description varchar(255),
   purchase_request_category enum('vegetables','fruits','fisheries','butchers','etc') not null ,
   purchase_request_quantity_kg int,
   purchase_request_proposed_price_per_kg int not null ,
   purchase_request_country_of_origin varchar(255) not null,
   purchase_request_date_of_manufacture DATE not null,
   purchase_request_detail_img varchar(255) not null,
   purchase_request_approval_status enum('pending','approved','rejected') default 'pending',
   purchase_request_status enum('active','inactive') default 'active' not null ,
   member_id bigint unsigned not null,
   created_date datetime default current_timestamp,
   updated_date datetime default current_timestamp,
   constraint fk_purchase_request_member foreign key (member_id)
       references tbl_member(id)
);

alter table tbl_product modify product_category enum('vegetables','fruits','fisheries','butchers','etc') not null;

select * from tbl_purchase_request;

drop table tbl_purchase_request;

insert into tbl_purchase_request
(purchase_request_product_name, purchase_request_description, purchase_request_category, purchase_request_quantity_kg, purchase_request_proposed_price_per_kg, purchase_request_country_of_origin, purchase_request_date_of_manufacture, purchase_request_detail_img, member_id, purchase_request_status, created_date, updated_date)
values
    ('양배추', '신선한 양배추 대량 구매 요청', 'vegetables', 500, 3000, 'Korea', '2025-07-01', '/images/product/cabbage_info.jpg', 55, 'active', '2025-08-19 09:43:02', '2025-08-19 09:43:02'),
    ('사과', '당도 높은 사과 대량 필요', 'fruits', 5000, 12000, 'Korea', '2025-07-15', '/images/product/apple_info.jpg', 53, 'active', '2025-08-19 09:43:02', '2025-08-19 09:43:02'),
    ('고등어', '신선한 고등어 대량 요청', 'fisheries', 1000, 9000, 'Korea', '2025-07-20', '/images/product/mackerel_info.jpg', 51, 'active', '2025-08-19 09:43:02', '2025-08-19 09:43:02'),
    ('한우 등심', '국내산 한우 등심 구입 요청', 'butchers', 500, 35000, 'Korea', '2025-07-05', '/images/product/beef_info.jpg', 50, 'active', '2025-08-19 09:43:02', '2025-08-19 09:43:02'),
    ('주방 세제', '대량 납품용 주방 세제 필요', 'etc', 50, 5000, 'Korea', '2025-07-25', '/images/product/detergent_info.jpg', 47, 'active', '2025-08-19 09:43:02', '2025-08-19 09:43:02'),
    ('신선한 배추', '국내산 신선 배추 요청', 'vegetables', 100, 5000, 'Korea', '2025-07-28', '/images/product/cabbage_info.jpg', 41, 'active', '2025-08-18 00:29:04', '2025-08-18 00:29:04'),
    ('제주 감귤', '제주산 감귤 대량 구입', 'fruits', 50, 20000, 'Korea', '2025-07-29', '/images/product/mandarin_info.jpg', 40, 'active', '2025-08-18 00:29:04', '2025-08-18 00:29:04'),
    ('활광어', '제철 활광어 필요', 'fisheries', 20, 30000, 'Korea', '2025-07-22', '/images/product/flatfish_info.jpg', 37, 'active', '2025-08-18 00:29:04', '2025-08-18 00:29:04'),
    ('한우 등심', '프리미엄 한우 등심 소량 요청', 'butchers', 10, 75000, 'Korea', '2025-07-12', '/images/product/beef_info.jpg', 13, 'active', '2025-08-18 00:29:04', '2025-08-18 00:29:04'),
    ('견과 세트', '선물용 견과 세트 필요', 'etc', 200, 25000, 'USA', '2025-07-10', '/images/product/nuts_info.jpg', 13, 'active', '2025-08-18 00:29:04', '2025-08-18 00:29:04'),
    ('청상추', '국내산 청상추 대량 구매', 'vegetables', 1000, 2500, 'Korea', '2025-07-18', '/images/product/lettuce_info.jpg', 53, 'active', '2025-08-19 09:48:15', '2025-08-19 09:48:15'),
    ('바나나', '수입 바나나 대량 요청', 'fruits', 2000, 6000, 'Ecuador', '2025-07-20', '/images/product/banana_info.jpg', 55, 'active', '2025-08-19 09:48:15', '2025-08-19 09:48:15'),
    ('생연어 300g', '노르웨이산 생연어 요청', 'fisheries', 300, 15000, 'Norway', '2025-07-14', '/images/product/salmon_info.jpg', 12, 'active', '2025-08-19 09:48:15', '2025-08-19 09:48:15'),
    ('삼겹살 1kg', '국내산 삼겹살 요청', 'butchers', 1000, 22000, 'Korea', '2025-07-16', '/images/product/pork_info.jpg', 51, 'active', '2025-08-19 09:48:15', '2025-08-19 09:48:15'),
    ('키친타올', '생활용품 키친타올 대량 구매', 'etc', 500, 4000, 'Korea', '2025-07-11', '/images/product/kitchentowel_info.jpg', 53, 'active', '2025-08-19 09:48:15', '2025-08-19 09:48:15');
