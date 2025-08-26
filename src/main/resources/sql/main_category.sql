use app;

create table tbl_main_category (
               id bigint unsigned auto_increment primary key,
               category_name varchar(255) not null unique
);

select *
from tbl_main_category;

insert into tbl_main_category (category_name) values
                                                  ('vegetables'),
                                                  ('fruits'),
                                                  ('fisheries'),
                                                  ('butchers'),
                                                  ('etc');