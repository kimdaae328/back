use app;

create view view_subscription_sub_payment as
(
select r.id,
       member_name,
       review_content,
       review_status,
       r.member_id,
       request_id,
       product_id,
       s.subscription_status,
       r.created_date,
       r.updated_date
from tbl_member m join tbl_review r
                       on m.id = r.member_id and r.review_status = 'active'
left join tbl_subscription_payment sp on m.id = sp.member_id
left join tbl_subscription s on sp.subscription_id = s.id
ORDER BY created_date DESC

    );

select * from view_subscription_sub_payment;

drop view view_subscription_sub_payment;

