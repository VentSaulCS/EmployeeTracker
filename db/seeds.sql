USE EMPLOYEETRACKER;
insert into DEPARTMENT(name)values
('Marketing'),('Sales'),('Management'),('IT');

insert into roles(title,salary,department_id)values
('Manager-Marketing',23243,1),
('Manager-Sales',23243,2),
('Manager-Management',23243,3),
('Manager-IT',23243,4),
('intorn-Marketing',23243,1),
('intorn-Sales',23243,2),
('intorn-Management',23243,3),
('intorn-IT',23243,4);


insert into Employees(first_name,LAST_NAME,ROLE_ID,MANAGER_ID) values
('Saul','Ventura',1,NULL),
('first','last',2,NULL),
('Sa','Ventuxccra',3,NULL),
('Saasdul','Vesadntura',4,NULL),
('Saasdul','Vezxntura',5,1),
('Sauxcl','Venturcca',6,2),
('Sasdaul','Vexzntura',7,3),
('Saucxl','Venturxczca',8,4);
