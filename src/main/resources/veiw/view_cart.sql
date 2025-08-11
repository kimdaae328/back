use app;

create view view_cart_product_member as
(
select
    m.id m_id,
    c.id c_id,
    c.cart_status,
    c.cart_count,
    p.id p_id,
    p.product_name,
    p.product_price,
    p.product_status,
    p.product_title_image_url


from
    tbl_member m
        join
    tbl_cart c on m.id = c.member_id
        join
    tbl_product p on p.id = c.product_id
    );

select * from view_cart_product_member;

drop view view_cart_product_member;
