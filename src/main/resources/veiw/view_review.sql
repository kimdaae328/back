use app;

create view view_review_review_image as
(
select
    r.id, m.member_name,
    r.review_content,
    r.review_status,
    r.member_id,
    r.request_id,
    r.product_id,
    rm.review_image_url,
    rm.review_image_status,
    r.created_date,
    r.updated_date


from tbl_review r
    join tbl_member m on m.id = r.member_id
    join tbl_review_image rm on r.id = rm.review_id and rm.review_image_status = 'active'

where review_status = 'active'
ORDER BY created_date DESC

);

select * from view_review_review_image;