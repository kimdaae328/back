use app;

create table tbl_product_inquiry(
                            id bigint unsigned auto_increment primary key,
                            product_inquiry_title varchar(255) not null ,
                            product_inquiry_content text not null ,
                            product_inquiry_status enum('active','inactive') default 'active' not null,
                            member_id bigint unsigned not null,
                            product_id bigint unsigned not null,
                            product_inquiry_answer_status enum('waiting','answered') default 'waiting',
                            created_date datetime default current_timestamp,
                            updated_date datetime default current_timestamp,
                            constraint fk_product_inquiry_member foreign key (member_id)
                                references tbl_member(id),
                            constraint fk_product_inquiry_product foreign key (product_id)
                                references tbl_product(id)

);


select * from tbl_product_inquiry;

drop table tbl_product_inquiry;
