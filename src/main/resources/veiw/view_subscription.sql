use app;

create view view_subscription_sub_payment as
(
select
    m.id m_id,
    s.id s_id,
    s.subscription_start_date,
    s.subscription_end_date,
    s.subscription_status,
    p.subscription_payment_status,
    p.id p_id
from
    tbl_member m
        join
    tbl_subscription_payment p on m.id = p.member_id
        join
    tbl_subscription s on s.id = p.subscription_id
    );

select * from view_subscription_sub_payment;

select *
from view_subscription_sub_payment
where subscription_payment_status != 'success';

select count(*) as member_count
from (
         select m_id
         from view_subscription_sub_payment
         group by m_id
         having
             sum(case when subscription_payment_status = 'success' then 1 else 0 end) = 0
            and sum(case when subscription_payment_status in ('failed','refunded') then 1 else 0 end) > 0
     ) t;
