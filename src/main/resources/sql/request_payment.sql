use app;

create table tbl_request_payment(
    id bigint unsigned auto_increment primary key,
    payment_method varchar(255) not null,
    payment_date DATE not null,
    payment_status enum('success', 'failed', 'refunded') not null ,
    member_id bigint unsigned not null,
    request_id bigint unsigned not null,
    created_date datetime default current_timestamp,
    updated_date datetime default current_timestamp,
    constraint fk_request_payment_member foreign key (member_id)
        references tbl_member(id),
    constraint fk_request_payment_request foreign key (request_id)
        references tbl_request(id)
);


select * from tbl_request_payment;

drop table tbl_request_payment;

insert into tbl_request_payment
(payment_method, payment_date, payment_status, member_id, request_id)
values
    ('credit_card', '2025-08-19', 'success', 117, 87),
    ('bank_transfer', '2025-08-19', 'success', 116, 86)

SELECT id FROM tbl_request;

insert into tbl_request_payment(payment_method, payment_date, payment_status, member_id, request_id)
values ('credit_card', '2025-08-20', 'success', 54, 87)


select
    count(*),
    sum(r.request_price),
    max(rp.payment_date)
from tbl_request_payment rp
         join tbl_request r on r.id = rp.request_id
where rp.member_id = 54
  and rp.payment_status = 'success';