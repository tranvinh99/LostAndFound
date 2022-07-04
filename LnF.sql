
create database LnF
go
use LnF
go
create table role(
role_id int primary key,
role_name varchar(10) not null,
)
Insert into role values(1, 'ADMIN')
Insert into role values(2, 'USER')

Create table member(
member_id int primary key IDENTITY(1,1),
role_id int foreign key references role(role_id),
username varchar(50) not null,
password varchar(50) not null,
fullName nvarchar(50) not null,
avatar varchar(1000) null,
contact varchar(10) not null,
email varchar(50) not null,
status bit not null
)
create table post_category(
category_name varchar(5) primary key,
)
insert into post_category values('Found')
insert into post_category values('Lost')

create table item_status(
status_id int primary key,
status_description nvarchar(10)
)
Insert into item_status values(1,'Lost')
Insert into item_status values(2,'Found')
Insert into item_status values(3,'Solve')

create table item_type(
type_description nvarchar(50) primary key
)

Insert into item_type values(N'Bình nước')
Insert into item_type values(N'Thẻ sinh viên')
Insert into item_type values(N'CMND')
Insert into item_type values(N'Thẻ xe')
Insert into item_type values(N'Chìa khóa')
Insert into item_type values(N'linh kiện điện tử')
Insert into item_type values(N'Ví/bóp')


create table lost_found_item(
item_id int primary key identity(1,1),
category_name varchar(5) foreign key references post_category(category_name),
title nvarchar(50) not null,
description nvarchar(100) not null,
date date not null,
time time null,
location_lost_found nvarchar(20) not null,
status int foreign key references item_status(status_id) not null,
member_id int foreign key references member(member_id),
hashTag varchar(20) null,
item_type nvarchar(50) foreign key references item_type(type_description)
)


create table item_img(
img_id int primary key identity(1,1),
item_id int foreign key references lost_found_item(item_id),
description_url varchar(1000) null
)

