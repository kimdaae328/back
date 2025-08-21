use app;

create table tbl_notice(
    id bigint unsigned auto_increment primary key,
    notice_title varchar(255) not null ,
    notice_content text not null ,
    notice_writer varchar(255) not null ,
    created_date datetime default current_timestamp,
    updated_date datetime default current_timestamp
);

select * from tbl_notice;

INSERT INTO tbl_notice (notice_title, notice_content, notice_writer)
VALUES
    ('서버 점검 안내', '오는 8월 25일 새벽 2시부터 4시까지 서버 점검이 진행됩니다.', '관리자'),
    ('신상품 입고 소식', '이번 주 새롭게 출시된 상품이 입고되었습니다. 많은 관심 부탁드립니다.', '홍길동'),
    ('이벤트 안내', '8월 한 달간 구매 고객 대상으로 10% 할인 이벤트를 진행합니다.', '관리자');

drop table tbl_notice;

