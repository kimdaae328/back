use app;

create table tbl_inquiry(
                               id bigint unsigned auto_increment primary key,
                               inquiry_category enum('goods', 'shipping', 'ect'),
                               inquiry_title varchar(255) not null ,
                               inquiry_content text not null ,
                               inquiry_image varchar(255),
                               member_id bigint unsigned not null,
                               created_date datetime default current_timestamp,
                               updated_date datetime default current_timestamp,
                               constraint fk_inquiry_member foreign key (member_id)
                                   references tbl_member(id)

);


select * from tbl_inquiry;

drop table tbl_inquiry;

INSERT INTO tbl_inquiry (inquiry_category, inquiry_title, inquiry_content, inquiry_image, member_id)
VALUES ('goods', '상품 옵션 변경 문의', '색상을 블랙에서 네이비로 변경 가능한가요?', NULL, 55),
       ('goods', '재고 문의', 'M 사이즈 재입고 예정일이 있을까요?', NULL, 55),
       ('goods', '교환 가능 여부', '받은 상품에 작은 흠집이 있어 교환 가능한지 궁금합니다.', 'img/inquiry_03.png', 53),
       ('shipping', '배송 지연 문의', '주문한 지 3일 지났는데 송장이 아직 없습니다. 확인 부탁드려요.', NULL, 55),
       ('shipping', '수령지 변경 요청', '회사에서 집으로 배송지 변경 부탁드립니다.', NULL, 51),
       ('shipping', '묶음 배송 가능한가요?', '같은 날 결제한 두 건을 묶음 배송 부탁드립니다.', NULL, 50),
       ('ect', '현금영수증 발급 요청', '개인 소득공제로 현금영수증 발급 부탁드립니다.', NULL, 47),
       ('ect', '회원정보 수정 관련', '휴대폰 번호 변경이 안 됩니다. 방법 알려주세요.', NULL, 47),
       ('goods', '상품 하자 사진 첨부', '봉제 불량이 있어 사진 첨부합니다. 처리 부탁드립니다.', 'img/inquiry_09.jpg', 40),
        ('shipping', '해외배송 가능 여부', '일본 주소로도 배송이 가능한지 궁금합니다.', NULL, 12),
        ('ect', '포인트 사용 방법', '적립 포인트를 결제 시 어떻게 적용하나요?', NULL, 13),
        ('goods', '사이즈 추천 요청', '키 159, 평소 S 착용합니다. 이 제품은 어떤 사이즈가 좋을까요?', NULL, 9),
        ('shipping', '분리 배송 문의', '한 주문이 두 박스로 나뉘어 온다고 뜨는데 정상인가요?', NULL, 8),
        ('ect', '주문 취소 후 재주문', '취소 후 쿠폰 적용해서 다시 주문해도 될까요?', NULL, 8);


