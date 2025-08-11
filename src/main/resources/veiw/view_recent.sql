use app;

create view view_recent_member_product as
(
select
    m.id m_id,
    r.id c_id,
    r.recent_number,
    p.id p_id,
    p.product_title_image_url


from
    tbl_member m
        join
    tbl_recent r on m.id = r.member_id
        join
    tbl_product p on p.id = r.product_id
    );

select * from view_recent_member_product;
