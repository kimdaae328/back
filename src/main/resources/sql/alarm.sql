use app;

create table tbl_alarm(
                            id bigint unsigned auto_increment primary key,
                            alarm_sender varchar(255) not null ,
                            alarm_content text not null ,
                            alarm_date date not null ,
                            member_id bigint unsigned not null,
                            created_date datetime default current_timestamp,
                            updated_date datetime default current_timestamp,
                            constraint fk_alarm_member foreign key (member_id)
                                references tbl_member(id)

);


select * from tbl_alarm;

drop table tbl_alarm;

