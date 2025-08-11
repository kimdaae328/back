use app;

create table tbl_faq(
                            id bigint unsigned auto_increment primary key,
                            faq_category enum('goods', 'shipping', 'ect'),
                            faq_title varchar(255) not null ,
                            faq_content text not null ,
                            created_date datetime default current_timestamp,
                            updated_date datetime default current_timestamp
);


select * from tbl_faq;

drop table tbl_faq;

