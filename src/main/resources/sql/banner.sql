use app;

create table tbl_banner(
                            id bigint unsigned auto_increment primary key,
                            banner_image varchar(255),
                            banner_order int not null,
                            banner_status enum('active', 'inactive') default 'active',
                            member_id bigint unsigned not null,
                            created_date datetime default current_timestamp,
                            updated_date datetime default current_timestamp,
                            constraint fk_banner_member foreign key (member_id)
                                references tbl_member(id)
);


select * from tbl_banner;

drop table tbl_banner;

insert into tbl_banner (banner_image, banner_order, member_id)
values ('/images/banner/banner-3.jpg', '3', '1');

