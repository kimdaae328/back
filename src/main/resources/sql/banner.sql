use app;

create table tbl_banner(
    id bigint unsigned auto_increment primary key,
    banner_order int not null,
    created_date datetime default current_timestamp,
    updated_date datetime default current_timestamp
);

select * from tbl_banner;

drop table tbl_banner;
