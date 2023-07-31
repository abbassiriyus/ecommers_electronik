CREATE TABLE users(
    "id" serial primary key,
    "name" VARCHAR (50) NOT NULL,
    "email" VARCHAR (50) NOT NULL,
    "image" TEXT ,
    "phone_number" VARCHAR(50),
    "country" VARCHAR (50) NOT NULL,
    "time_create" timestamp default current_timestamp not null,
	"time_update" timestamp default current_timestamp not null
 )





CREATE TABLE img(
    "id" serial primary key,
    "image" TEXT ,
    "product_id" integer  NOT NULL,
    "time_create" timestamp default current_timestamp not null,
	"time_update" timestamp default current_timestamp not null
 )
