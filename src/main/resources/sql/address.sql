use app;

create table tbl_address(
                             id bigint unsigned primary key,
                             address varchar(255),
                             address_detail varchar(255),
                             address_post_number varchar(255),
                             address_status enum('active','inactive') default 'active' not null,
                             member_id bigint unsigned,
                             created_date datetime default current_timestamp,
                             updated_date datetime default current_timestamp,
                             constraint fk_address_member foreign key (member_id)
                                 references tbl_member(id)
);


select * from tbl_address;

drop table tbl_address;

