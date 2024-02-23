

use crud_mysql_dev;
insert into type_task (name,description) values ('Work','Task from Work');
insert into type_task (name,description) values ('House','Task from House');
insert into type_task (name,description) values ('University','Task from University');
insert into type_task (name,description) values ('Family','Task from Family');

use crud_mysql_dev;
insert into task (type_task_id ,title,description,done) values (3,'Test 01','Description 01',0);
insert into task (type_task_id ,title,description,done) values (2,'Test 02','Description 02',1);
insert into task (type_task_id ,title,description,done) values (1,'Test 03','Description 03',0);


use crud_mysql_dev;
select * from crud_mysql_dev.task;

use crud_mysql_dev;
select * from crud_mysql_dev.type_task;

use crud_mysql_dev;
CREATE TABLE temporal SELECT * FROM task;

select * from task;

select * from temporal





