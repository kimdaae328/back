use app;

create table tbl_inquiry(
                               id bigint unsigned auto_increment primary key,
                               inquiry_category enum('goods', 'shipping', 'ect'),
                               inquiry_title varchar(255) not null ,
                               inquiry_content text not null ,
                               inquiry_image varchar(255),
                               member_id bigint unsigned not null,
                               created_date datetime default current_timestamp,
                               updated_date datetime default current_timestamp,
                               constraint fk_inquiry_member foreign key (member_id)
                                   references tbl_member(id)

);


select * from tbl_inquiry;

drop table tbl_inquiry;

