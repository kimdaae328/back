use app;

create table tbl_inquiry_answer(
                            id bigint unsigned auto_increment primary key,
                            inquiry_answer_content text not null ,
                            inquiry_id bigint unsigned not null,
                            created_date datetime default current_timestamp,
                            updated_date datetime default current_timestamp,
                            constraint fk_inquiry_answer_inquiry foreign key (inquiry_id)
                                references tbl_inquiry(id)
);



select * from tbl_inquiry_answer;

drop table tbl_inquiry_answer;

