use app;

create view view_best_product_detail as
select
    p.id as id,
    p.product_name,
    p.product_price,
    p.product_quantity,
    p.product_title_image_url,
    p.product_info_image_url,
    p.product_min_number,
    p.product_status,
    p.created_date,
    p.updated_date,
    m.id as member_id,
    m.member_name,
    mc.id as main_category_id,
    mc.category_name as main_category_name,
    sc.id as sub_category_id,
    sc.sub_category_name,
    coalesce(lc.like_count, 0) as like_count
from tbl_product p
         join tbl_member m on p.member_id = m.id
         join tbl_main_category mc on p.main_category_id = mc.id
         left join tbl_sub_category sc
                   on sc.main_category_id = mc.id
                       and sc.sub_category_name = p.sub_category_name
         left join (
    select
        product_id,
        count(*) as like_count
    from tbl_like
    group by product_id
) lc on p.id = lc.product_id;

select * from view_best_product_detail order by like_count desc ;

drop view view_best_product_detail;


