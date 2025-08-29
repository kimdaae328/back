CREATE OR REPLACE VIEW view_member_subscription AS
SELECT
    m.id AS member_id,
    MAX(
            CASE
                WHEN EXISTS (
                    SELECT 1
                    FROM tbl_subscription_payment sp
                             JOIN tbl_subscription s ON sp.subscription_id = s.id
                    WHERE sp.member_id = m.id
                      AND sp.subscription_payment_status = 'success'
                      AND s.subscription_status = 'active'
                )
                    THEN true
                ELSE false
                END
    ) AS has_active_subscription
FROM tbl_member m
GROUP BY m.id;

select *from view_member_subscription;
DROP VIEW IF EXISTS view_member_subscription;