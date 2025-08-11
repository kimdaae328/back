use app;


create table tbl_notice(
                            id bigint unsigned auto_increment primary key,
                            notice_title varchar(255) not null ,
                            notice_content text not null ,
                            notice_writer varchar(255) not null ,
                            created_date datetime default current_timestamp,
                            updated_date datetime default current_timestamp
);


select * from tbl_notice;

drop table tbl_notice;

