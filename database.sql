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
CREATE TABLE product(
    "id" serial primary key,
    "product" integer NOT NULL,
    "title" TEXT  NOT NULL,
    "dell" integer  NOT NULL,
    "description" TEXT  NOT NULL,
    "count" integer,
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
CREATE TABLE category(
    "id" serial primary key,
    "name" TEXT ,
    "time_create" timestamp default current_timestamp not null,
	"time_update" timestamp default current_timestamp not null
 )
 CREATE TABLE tegs(
    "id" serial primary key,
    "name" TEXT ,
    "time_create" timestamp default current_timestamp not null,
	"time_update" timestamp default current_timestamp not null
 )
 CREATE TABLE product_tegs(
    "id" serial primary key,
    "procuct_id" TEXT,
    "tegs_id" integer  NOT NULL,
    "time_create" timestamp default current_timestamp not null,
	"time_update" timestamp default current_timestamp not null
 )
CREATE TABLE buy_product(
    "id" serial primary key,
    "procuct_id" TEXT,
    "user_id" integer  NOT NULL,
    "time_create" timestamp default current_timestamp not null,
	"time_update" timestamp default current_timestamp not null
 )