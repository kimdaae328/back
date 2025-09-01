use app;

create table tbl_group(
                          primary key (group_index_number, product_id),
                          group_index_number bigint not null ,
                          product_id bigint unsigned not null,
                          group_cancelable enum('able', 'unable') not null default 'able',
                          created_date datetime default current_timestamp,
                          updated_date datetime default current_timestamp
);

select * from tbl_group;
delete from tbl_group where group_index_number=1;
ALTER TABLE tbl_group
    MODIFY COLUMN group_cancelable ENUM('able','unable') NOT NULL DEFAULT 'able';
INSERT INTO tbl_group (group_index_number, product_id, group_cancelable)
VALUES
    (1, 1, 'able'),
    (2, 2, 'able')
ON DUPLICATE KEY UPDATE
                     group_cancelable = VALUES(group_cancelable);
select * from tbl_group;
drop table tbl_group;
delete from tbl_group where group_index_number=1;