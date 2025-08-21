use app;

create view view_request_group as
(
select
    r.id r_id,
    r.request_amount,
    r.request_price,
    r.request_status,
    g.product_id,
    g.group_index_number,
    g.group_cancelable
from
    tbl_request r
        join
    tbl_group g on r.group_index_number = g.group_index_number and r.product_id = g.product_id
    );

select * from view_request_group;
