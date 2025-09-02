use app;

create table tbl_purchase_request(
   id bigint unsigned auto_increment primary key,
   purchase_request_product_name varchar(255) not null,
   purchase_request_description varchar(255),
   purchase_request_category enum('vegetables','fruits','fisheries','butchers','etc') not null ,
   purchase_request_quantity_kg int,
   purchase_request_proposed_price_per_kg int not null ,
   purchase_request_country_of_origin varchar(255) not null,
   purchase_request_date_of_manufacture DATE not null,
   purchase_request_detail_img varchar(255) not null,
   purchase_request_approval_status enum('pending','approved','rejected') default 'pending',
   purchase_request_status enum('active','inactive') default 'active' not null ,
   member_id bigint unsigned not null,
   created_date datetime default current_timestamp,
   updated_date datetime default current_timestamp,
   constraint fk_purchase_request_member foreign key (member_id)
       references tbl_member(id)
);
