use app;

create view view_member_address as
(
select
    m.id m_id,
    m.member_email,
    m.member_name,
    m.member_phone,
    m.member_role,
    m.member_status,
    m.created_date,
    m.updated_date,
    a.id a_id,
    a.address,
    a.address_detail,
    a.address_post_number,
    a.address_status
from
    tbl_member m
        join
    tbl_address a on m.id = a.member_id
    );

select * from view_member_address;
