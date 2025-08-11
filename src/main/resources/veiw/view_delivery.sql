use app;

create view view_delivery_member_address_request_product as
(
select
    m.id m_id,
    m.member_name,
    m.member_phone,
    a.address,
    a.address_detail,
    a.address_post_number,
    r.id r_id,
    r.request_amount,
    r.request_price,
    d.id d_id,
    d.delivery_status,
    d.delivery_count,
    p.id p_id,
    p.product_name


from
    tbl_member m
        join
    tbl_address a on m.id = a.member_id
        join
    tbl_request r on m.id = r.member_id
        join
    tbl_product p on p.id = r.product_id
        join
    tbl_delivery d on r.id = d.request_id
    );

select * from view_delivery_member_address_request_product;

drop view view_delivery_member_address_request_product;