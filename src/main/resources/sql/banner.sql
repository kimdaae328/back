use app;

create table tbl_banner(
    id bigint unsigned auto_increment primary key,
    banner_status enum('main', 'sub') not null,
    banner_order int not null,
    created_date datetime default current_timestamp,
    updated_date datetime default current_timestamp
);


select * from tbl_banner;

drop table tbl_banner;

select b.id, b.banner_status, b.banner_order, b.created_date, b.updated_date, bf.banner_id, bf.file_id, f.file_path, f.file_name, f.file_original_name, f.file_size
from tbl_banner b
         join tbl_banner_file bf on b.id = bf.banner_id
         join tbl_file f on f.id = bf.file_id
order by b.id desc

