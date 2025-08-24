use app;

create table tbl_inquiry_answer(
                            id bigint unsigned auto_increment primary key,
                            inquiry_answer_content text not null ,
                            inquiry_id bigint unsigned not null,
                            created_date datetime default current_timestamp,
                            updated_date datetime default current_timestamp,
                            constraint fk_inquiry_answer_inquiry foreign key (inquiry_id)
                                references tbl_inquiry(id)
);



select * from tbl_inquiry_answer;

select i.id, i.inquiry_category, i.inquiry_title, i.inquiry_content, i.inquiry_image, i.member_id, i.created_date as inquiryCreatedDate, i.updated_date as inquiryUpdatedDate,
       m.member_name, ia.inquiry_id, ia.inquiry_answer_content, ia.created_date as answerCreatedDate, ia.updated_date as answerUpdatedDate
from tbl_inquiry i
         left join tbl_inquiry_answer ia
                   on ia.inquiry_id = i.id
         join tbl_member m
              on m.id = i.member_id
where m.member_status = 'active' and m.member_role = 'seller'
  and ia.inquiry_answer_content is not null
order by i.id desc

drop table tbl_inquiry_answer;

