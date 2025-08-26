use app;

create table tbl_group(
                          primary key (group_index_number, product_id),
                          group_index_number bigint not null ,
                          product_id bigint unsigned not null,
                          group_cancelable enum('able', 'unable') default 'able',
                          created_date datetime default current_timestamp,
                          updated_date datetime default current_timestamp
);

select * from tbl_group;

INSERT INTO tbl_group (group_index_number, product_id, group_cancelable)
VALUES
    (1, 1, 'able'),
    (2, 2, 'able'),
    (3, 3, 'unable'),
    (4, 2, 'able'),
    (5, 3, 'unable')
ON DUPLICATE KEY UPDATE
                     group_cancelable = VALUES(group_cancelable);

drop table tbl_group;