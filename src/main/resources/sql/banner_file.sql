use app;

create table tbl_banner_file (
    id bigint unsigned auto_increment primary key,
    banner_id bigint unsigned not null,
    file_id bigint UNSIGNED NOT NULL,
    constraint fk_banner_file_banner foreign key (banner_id)
        references tbl_banner(id),
    constraint fk_banner_file_file foreign key (file_id)
        references tbl_file(id)
);

# drop table tbl_banner_file;

select * from tbl_banner_file;