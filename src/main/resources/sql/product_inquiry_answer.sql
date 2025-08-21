use app;

create table tbl_product_inquiry_answer(
                            id bigint unsigned auto_increment primary key,
                            product_inquiry_answer_content text not null ,
                            product_inquiry_answer_status enum('active','inactive') default 'active' not null,
                            product_inquiry_id bigint unsigned not null,
                            created_date datetime default current_timestamp,
                            updated_date datetime default current_timestamp,
                            constraint fk_tbl_product_inquiry_answer_product_inquiry foreign key (product_inquiry_id)
                                references tbl_product_inquiry(id)

);


select * from tbl_product_inquiry_answer;

drop table tbl_product_inquiry_answer;

