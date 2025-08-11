use app;

create view view_like_product_member as
(
select
    m.id m_id,
    l.id c_id,
    p.id p_id,
    p.product_name,
    p.product_price,
    p.product_status,
    p.product_title_image_url


from
    tbl_member m
        join
    tbl_like l on m.id = l.member_id
        join
    tbl_product p on p.id = l.product_id
    );

select * from view_like_product_member;

drop view view_like_product_member;
