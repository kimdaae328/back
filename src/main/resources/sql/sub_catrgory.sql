use app;

create table tbl_sub_category (
              id bigint unsigned auto_increment primary key,
              main_category_id bigint unsigned not null,
              sub_category_name varchar(255) not null,
              constraint fk_subcategory_main foreign key (main_category_id)
                  references tbl_main_category(id)
);

select * from tbl_sub_category;

-- 채소
insert into tbl_sub_category (main_category_id, sub_category_name) values
                                                                       (1, '잎채소'),
                                                                       (1, '뿌리채소'),
                                                                       (1, '과채류');

-- 과일·견과·쌀
insert into tbl_sub_category (main_category_id, sub_category_name) values
                                                                       (2, '제철과일'),
                                                                       (2, '열대과일'),
                                                                       (2, '견과류'),
                                                                       (2, '쌀');

-- 수산·해산·건어물
insert into tbl_sub_category (main_category_id, sub_category_name) values
                                                                       (3, '생선'),
                                                                       (3, '해산물'),
                                                                       (3, '건어물');

-- 정육·가공육·달걀
insert into tbl_sub_category (main_category_id, sub_category_name) values
                                                                       (4, '소고기'),
                                                                       (4, '돼지고기'),
                                                                       (4, '가공육'),
                                                                       (4, '달걀');

-- 기타
insert into tbl_sub_category (main_category_id, sub_category_name) values
                                                                       (5, '장류'),
                                                                       (5, '분말류'),
                                                                       (5, '기타상품');
