CREATE   DATABASE Client_TA_2021;
USE Client_TA_2021

select * from Comment
select * from Issue
select * from Client
select * from Serviceclient
select * from Services


update client set email='jahanrive3131@gmail.com' where client_id=1004

 DBCC CHECKIDENT (Client, RESEED, 0)
delete from Comment
delete from Issue
delete from Serviceclient
delete from Client

ALTER PROCEDURE SP_UpdateComments(@commend_id int, @issue_id int, @description varchar(300),
@usermodification varchar(60)) AS BEGIN 

UPDATE Comment
set description=@description,modificationuser=@usermodification,
modificationdate=GETDATE() where comment_id=@commend_id and issue_id=@issue_id

select @commend_id

END

EXEC SP_UpdateComments 9,1,'De acuerdo, mil gracias','Karol Montenegro'

ALTER procedure SP_UpdateStatusIssue(@issue_id int, @status varchar(50), @modificationsser varchar(60))
as begin
update Issue
set status=@status,
modificationuser=@modificationsser,
modificationdate=GETDATE()
where issue_id=@issue_id

Select @issue_id
end
CREATE procedure SP_UpdateIdSupporterIssue(@issue_id int, @supportusertassigned int, @modificationsser varchar(60))
as begin
update Issue
set supportusertassigned=@supportusertassigned,
modificationuser=@modificationsser,
modificationdate=GETDATE()
where issue_id=@issue_id
end



select issue.issue_id as[issue_id] ,issue.report,client.name,client.firstsurname,client.secondsurname,
client.email,client.phone,client.address,client.secondcontact,issue.status,issue.contactemail,issue.contactphone
 from Client  client join Issue issue  on client.client_id=issue.issue_id
where  issue.issue_id=@issue_id  and supportusertassigned=@supporAssigned  and client.client_id=issue.issue_id


select issue.issue_id,issue.report,client.name,client.firstsurname,client.secondsurname, client.email,client.phone,client.address,client.secondcontact, issue.status,issue.contactemail,issue.contactphone from Client  client join Issue issue  on client.client_id=issue.issue_id where  issue.issue_id=3 and client.client_id=issue.issue_id

--------DATABASE CLIENTE------------
CREATE TABLE Issue(
[issue_id]                INT IDENTITY(1,1) PRIMARY KEY,
[description]            NVARCHAR(100) NULL,--descripcion del cado reportado por el cliente
[report]                 INT           NULL,/*Numero de reporte*/
[register]               DATETIME     NULL,/*Fecha y hora que se crea la solicitud*/
[address]                NVARCHAR(100) NULL,
[contactphone]           NVARCHAR(50)  NULL,
[contactemail]           NVARCHAR(50)  NULL,
[status]                 NVARCHAR(30)  CHECK ([status] IN('INGRESADO','ASIGNADO','EN PROCESO','RESUELTO','SIN ASIGNAR')) NULL,--ESTADO SOLI INGRESADO,ASIGNADO,EN PROCESO-RESUELTO
[supportusertassigned]   INT           NULL,--UO Asignado
[client_id]              INT           NULL,
[service_id]             INT           NULL,
[name]                   varchar(50) null,
[creationdate]           DATETIME      NULL, 
[modificationdate]       DATETIME      NULL,
[usercreation]           NVARCHAR(200) NULL,
[modificationuser]       NVARCHAR(200) NULL,
 CONSTRAINT FK_Client_Issue1 FOREIGN KEY ([client_id]) REFERENCES Client([client_id]),
 CONSTRAINT FK_Service_Issue1 FOREIGN KEY ([service_id]) REFERENCES [Service]([service_id]));

 CREATE TABLE [Client](
[client_id]        INT IDENTITY(1,1) PRIMARY KEY,
[name]            VARCHAR(50) NULL,
[firstsurname]    VARCHAR(50) NULL,
[secondsurname]   VARCHAR(50) NULL,
[address]         VARCHAR(50) NULL,
[phone]           VARCHAR(50) NULL,
[secondcontact]   VARCHAR(50) NULL,
[email]           VARCHAR(50) NULL,
[password]        VARCHAR(50) NULL,
[creationdate]    DATETIME    NULL, 
[modificationdate]DATETIME    NULL,
[usercreation]    VARCHAR(50) NULL,
[modificationuser]VARCHAR(50) NULL)


insert into Client values('Juanita','Zamora','Guillen','Cartago','78992244','56789876','juanizamogui@gmail.com', '12345', getdate(),null,null,null)
insert into [service] values ('TELEFONIA MOVIL',GETDATE(),NULL,'sa',null)
insert into [service] values ('CABLE',GETDATE(),NULL,'sa',null)
insert into [service] values ('INTERNET ',GETDATE(),NULL,'sa',null)
insert into [service] values ('TELEFONIA FIJA',GETDATE(),NULL,'sa',null)
insert into [serviceClient] values (3,1,GETDATE(),null,'sa',null)

CREATE TABLE [Services](
[service_id]       INT IDENTITY(1,1) PRIMARY KEY,
[name]            VARCHAR(100)  CHECK ([name] IN('TELEFONIA MOVIL','CABLE','INTERNET','TELEFONIA FIJA','OTRO')) NULL,
[creationdate]    DATETIME     NULL, 
[modificationdate]DATETIME     NULL,
[usercreation]    VARCHAR(100) NULL,
[modificationuser]VARCHAR(100) NULL)

CREATE TABLE Serviceclient(
[serviceclient_id] INT IDENTITY(1,1) PRIMARY KEY,
[service_id]       INT          NULL,
[client_id]        INT           NULL,
[creationdate]    DATETIME     NULL, 
[modificationdate]DATETIME     NULL,
[usercreation]    VARCHAR(100) NULL,
[modificationuser]VARCHAR(100) NULL,
CONSTRAINT  FK_IdService_ServiceClient FOREIGN KEY ([service_id]) REFERENCES [Service]([service_id]),
CONSTRAINT FK_IdClient_ServiceClient FOREIGN KEY ([client_id]) REFERENCES Client([client_id]))

SELECT * FROM Comment


alter table  Comment alter column [description]   VARCHAR(300)
CREATE TABLE Comment(
[comment_id]        INT IDENTITY(1,1) PRIMARY KEY,
[description]      VARCHAR(300)  NULL,/*Coment by OC o UO*/
[comment]          DATETIME     NULL,/*Fecha y hora se registro el comentario*/
[issue_id]          INT           NULL, 
[isuser]            INT        DEFAULT 0,
typeUser           VARCHAR(50)       NULL.
[creationdate]     DATETIME      NULL, 
[modificationdate] DATETIME      NULL,
[usercreation]     VARCHAR(100)  NULL,
[modificationuser] VARCHAR(100)  NULL,
 CONSTRAINT FK_IdIssue_Comment FOREIGN KEY ([issue_id]) REFERENCES Issue([issue_id])
)
alter table Comment
add   isUser int default 0;

------Procedures--------


alter PROCEDURE getcontractservice @client_id int
as begin
select services.service_id,services.name,serviceclient.creationdate  from Services services
join Serviceclient serviceclient on services.service_id=serviceclient.service_id
where  services.service_id=serviceclient.service_id and  serviceclient.client_id=@client_id
end

exec getcontractservice 1

ALTER procedure notcontractservices (@client_id int)
as begin
Select service_id,name,creationdate  from Services services 
where  services.service_id not in  ( Select serviceclient.service_id from
Serviceclient serviceclient where serviceclient.client_id=@client_id)
end

exec notcontractservices 2



ALTER PROCEDURE ShowIssue( @client_id int)
as begin 

Select * from Issue  issue join Services services on issue.service_id=services.service_id
where Issue.client_id=@client_id
end
exec ShowIssue 4


ALTER PROCEDURE listaComment( @issue_id int)
As begin
Select * from Comment where issue_id=@issue_id
order by comment DESC
end


CREATE Procedure countComment( @issue_id int)
As begin
Select count(*) as [issue_id] from Comment where issue_id=@issue_id
end