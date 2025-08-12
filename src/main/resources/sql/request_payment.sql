use app;

create table tbl_request_payment(
    id bigint unsigned auto_increment primary key,
    payment_method varchar(255) not null,
    payment_date DATE not null,
    payment_status enum('success', 'failed', 'refunded') not null ,
    member_id bigint unsigned not null,
    request_id bigint unsigned not null,
    constraint fk_request_payment_member foreign key (member_id)
        references tbl_member(id),
    constraint fk_request_payment_request foreign key (request_id)
        references tbl_request(id)
);


select * from tbl_request_payment;

drop table tbl_request_payment;