-- CREATE DATABASE task_manager;
-- USE task_manager;
-- CREATE TABLE tasks (
-- id INT AUTO_INCREMENT PRIMARY KEY,      -- מזהה ייחודי
--     title VARCHAR(255) NOT NULL,            -- שם המשימה
--     description TEXT,                       -- תיאור המשימה
--     status ENUM('incomplete', 'complete') DEFAULT 'incomplete'
--     );
create database TasksDB;

USE TasksDB;


CREATE TABLE tasks( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
	status_task ENUM('complete','incomplete')
);

insert into tasks(title,status_task)
values ("שיעורי בית",'complete');

insert into tasks(title,status_task)
values (" מבחן",'incomplete');



select * from tasks;


ALTER TABLE tasks
MODIFY COLUMN status_task VARCHAR(255);



DELETE FROM TasksDB.tasks  WHERE id = 4
