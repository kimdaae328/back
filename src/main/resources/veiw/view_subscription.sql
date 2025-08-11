use app;

create view view_subscription_sub_payment as
(
select
    m.id m_id,
    s.id s_id,
    s.subscription_start_date,
    s.subscription_end_date,
    s.subscription_status,
    p.id p_id
from
    tbl_member m
        join
    tbl_subscription_payment p on m.id = p.member_id
        join
    tbl_subscription s on s.id = p.subscription_id
    );

select * from view_member_address;
