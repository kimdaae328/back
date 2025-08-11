use app;

create view view_commission_request_group as
(
select
    c.id c_id,
    c.commission_price,
    c.commission_rate,
    r.id r_id,
    r.request_price,
    g.group_cancelable


from
    tbl_commission c
        join
    tbl_request r on r.id = c.request_id
        join
    tbl_group g on r.group_index_number = g.group_index_number and r.product_id = g.product_id
    );

select * from view_recent_member_product;
