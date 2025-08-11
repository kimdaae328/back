use app;

create table tbl_commission(
                               id bigint unsigned auto_increment primary key,
                               commission_rate int not null ,
                               commission_price int not null ,
                               request_id bigint unsigned not null,
                               created_date datetime default current_timestamp,
                               updated_date datetime default current_timestamp,
                               constraint fk_commission_request foreign key (request_id)
                                   references tbl_request(id)

);


select * from tbl_commission;

drop table tbl_commission;

