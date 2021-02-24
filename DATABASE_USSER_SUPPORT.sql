CREATE  DATABASE  User_TA_2021
USE User_TA_2021

select * from Issue
select * from Supporter
select * from Supervisor
delete from Supervisor where name='888'

select * from Issue
select * from Note
select * from Service
select * from Service_Supporter

CREATE PROCEDURE SP_GetNameHasSupporterById(@idSupporter int)
AS BEGIN
select * from Service 
where  IdService   in (
select IdService from Service_Supporter
where  IdSupporter=@idSupporter)
END
CREATE PROCEDURE SP_GetNameNotHasSupporterById(@idSupporter int)
AS BEGIN
select * from Service 
where  IdService  not in (
select IdService from Service_Supporter
where  IdSupporter=@idSupporter)
END



 DBCC CHECKIDENT (Supporter, RESEED, 0)


ALTER PROCEDURE SP_ListAllIssues
AS BEGIN
SELECT *,(
Select Concat(name,FirstSurname,SecondSurname) from Supporter supporter where supporter.IdSupporter=issue.idsupporter
) AS fullnameSupporter
FROM Issue issue
order by issue.register desc
END


ALTER procedure SP_UpdateIdSupporterIssue(@issue_id int, @supportusertassigned int, @modificationsser varchar(60), @RESULT INT OUTPUT)
As begin  SELECT * FROM Issue where issueId=@issue_id
IF EXISTS (SELECT idService FROM Issue WHERE issueId=@issue_id AND idService in (
Select idService from Service_Supporter where IdSupporter=@supportusertassigned ) ) 
BEGIN
	PRINT 'Supporter  give this services';
	update Issue
	set IdSupporter=@supportusertassigned,
	modificationsser=@modificationsser,
	modificationdate=GETDATE()
	where issueId=@issue_id

	SET @RESULT=1;
   Select @RESULT;
END
ELSE
BEGIN
PRINT 'Supporter doesnot give this services';
  SET @RESULT=2;
   Select @RESULT;
END  
end

 SELECT * FROM Issue
  SELECT * FROM Service
  SELECT IdService,IdSupporter FROM Service_Supporter group by IdSupporter,IdService
  DECLARE  @RESULT INT
 EXEC SP_UpdateIdSupporterIssue 1, 1001,'Bryan Montenegro',@RESULT OUTPUT

 --issue 1 INTERNET
 --BRYAN NO DA SERVICIO DE INTERNET
CREATE procedure SP_UpdateClasificationIssue(@issue_id int, @Clasification varchar(60), @modificationsser varchar(60))
as begin
update Issue
set Clasification= @Clasification,
modificationsser=@modificationsser,
modificationdate=GETDATE()
where issueId=@issue_id

end



alter procedure SP_UpdateStatusIssue(@issue_id int, @status varchar(50), @modificationsser varchar(60))
as begin
update issue
set status=@status,
modificationsser=@modificationsser,
modificationdate=GETDATE()
where issueId=@issue_id

if @status ='RESUELTO' begin
update issue set resolution='Resuelto'
where issueId=@issue_id
end
end

exec SP_AsignedSupervidor
CREATE procedure SP_AsignedSupervidor
as begin
declare @Name varchar(50) ,
@FirstSurname varchar(50) ,@SecondSurname varchar(50) ,
@Email varchar(50) , @Password varchar(50) , @CreationDate datetime ,
@ModificationDate datetime , @UserCreation varchar(50) ,@ModificationUser varchar(50) 

Select @Name=[Name],@FirstSurname=FirstSurname,@SecondSurname=SecondSurname,@Email=Email,
@Password=[Password],@CreationDate=CreationDate, @ModificationDate=ModificationDate,
@UserCreation=UserCreation,@ModificationUser=ModificationUser from Supporter where  [asignedAsSupervisor]=1 

select @Name
if @Name is not null and not exists(select * from Supervisor where Email=@Email )  begin
select 'hola'
Insert into Supervisor ([Name], FirstSurname,SecondSurname,Email,[Password],CreationDate,ModificationDate,UserCreation,ModificationUser)
VALUES (@Name,@FirstSurname,@SecondSurname,@Email,@Password,@CreationDate,@ModificationDate,@UserCreation,@ModificationUser)
end

end
--------DATABASE SOPORTE DE USUARIO------------
CREATE TABLE Supervisor(
[IdSupervisor]     INT IDENTITY(1,1) PRIMARY KEY,
[Name]             VARCHAR(50) NULL,
[FirstSurname]     VARCHAR(50) NULL,
[SecondSurname]    VARCHAR(50) NULL,
[Email]            VARCHAR(50) NULL,
[Password]         VARCHAR(50) NULL,
[CreationDate]     DATETIME    NULL, 
[ModificationDate] DATETIME    NULL,
[UserCreation]     VARCHAR(50)NULL,
[ModificationUser] VARCHAR(50)NULL)

CREATE TABLE Supporter(
[IdSupporter]   INT IDENTITY(1,1) PRIMARY KEY,
[Name]          VARCHAR(50) NULL,
[FirstSurname]  VARCHAR(50) NULL,
[SecondSurname] VARCHAR(50) NULL,
[Email]         VARCHAR(50) NULL,
[Password]      VARCHAR(50) NULL,
[asignedAsSupervisor] int  default 0 NULL,
[IdSupervisor]   INT         NULL,
[CreationDate]     DATETIME NULL, 
[ModificationDate] DATETIME NULL,
[UserCreation]     VARCHAR(50)NULL,
[ModificationUser] VARCHAR(50)NULL,
CONSTRAINT FK_IdSupervisor_Supporter FOREIGN KEY ([IdSupervisor]) REFERENCES Supervisor([IdSupervisor]))
/*Valorar si agregar un campo del nombre del servicio solicitado por el cliente que llena el Issue*/



Alter PROCEDURE PA_ShowRequestRegistedUser
AS BEGIN
SELECT CASE
            WHEN IdSupporter = NULL 
               THEN  NULL
               ELSE  (Select Concat( [Name],' ',[FirstSurname]) from Supervisor s where s.IdSupervisor= IdSupporter)
       END as [FullName],  Id_Issue,Report,IdSupporter,Clasification,[Status], Register, 
	   CreationDate,ModificationDate,UserCreation,ModificationUser, Resolution
FROM Issue
END

EXEC PA_ShowRequestRegistedUser

CREATE TABLE Issue(
issueId              INT PRIMARY KEY,
[report]                INT           NULL,
[clasification]         VARCHAR(30)  CHECK ([Clasification] IN('ALTA','MEDIA','BAJA','SIN PRIORIDAD','SIN ASIGNAR')) NULL,--ESTADO SOLI INGRESADO,ASIGNADO,EN PROCESO-RESUELTO
[status]                VARCHAR(30)  CHECK ([Status] IN('INGRESADO','ASIGNADO','EN PROCESO','RESUELTO','SIN ASIGNAR')) NULL,--ESTADO SOLI INGRESADO,ASIGNADO,EN PROCESO-RESUELTO
[register]              DATETIME     NULL,/*Fecha y hora ingreso solicitud*/
[resolution]            VARCHAR(100) NULL,
[idsupporter]           INT            DEFAULT NULL,
[idService]             INT           NULL,
[creationdate]          DATETIME      NULL, 
[modificationdate]      DATETIME      NULL,
[usercreation]          VARCHAR(50)  NULL,
[modificationsser]      VARCHAR(50)  NULL,
 FOREIGN KEY ([idService]) REFERENCES Service([idService]),
CONSTRAINT FK_IdSupporter_Issue FOREIGN KEY ([IdSupporter]) REFERENCES Supporter([IdSupporter]));



select * from Issue
 update issue
 set idService=2 where issueId=1002

ALTER TABLE Issue
add idService int 
ALTER TABLE Issue
ADD FOREIGN KEY (idService) REFERENCES Service(idService);

SELECT * FROM Service

alter table  Note
alter column [Name]   VARCHAR(300)
CREATE TABLE Note(
[IdNote]         INT IDENTITY(1,1) PRIMARY KEY,
[Name]            VARCHAR(300)  NULL,
[NoteTime]        DATETIME    NULL,
issueId              INT         NULL,
isUserSU            INT          NULL,
typeUser            varchar(60)  NULL,
[CreationDate]     DATETIME      NULL, 
[ModificationDate] DATETIME      NULL,
[UserCreation]     VARCHAR(100)  NULL,
[ModificationUser] VARCHAR(100)  NULL,
CONSTRAINT FK_IdIssue_Note FOREIGN KEY (issueId) REFERENCES Issue(issueId));


alter table Note
add isUserSU int null

CREATE TABLE [Service](
[IdService]       INT IDENTITY(1,1) PRIMARY KEY,
[Name]             VARCHAR(100)  CHECK ([Name] IN('TELEFONIA MOVIL','CABLE','INTERNET','TELEFONIA FIJA','OTRO')) NULL,
[CreationDate]     DATETIME NULL, 
[ModificationDate] DATETIME NULL,
[UserCreation]     VARCHAR(100)NULL,
[ModificationUser] VARCHAR(100)NULL)



CREATE TABLE Service_Supporter(
IdServiceSopport   INT IDENTITY(1,1) PRIMARY KEY,
[IdService]        INT NULL,
[IdSupporter]      INT NULL,
[CreationDate]     DATETIME NULL, 
[ModificationDate] DATETIME NULL,
[UserCreation]     VARCHAR(100)NULL,
[ModificationUser] VARCHAR(100)NULL,
CONSTRAINT FK_IdService_ServiceSopport FOREIGN KEY ([IdService]) REFERENCES [Service]([IdService]),
CONSTRAINT FK_IdSupporter_ServiceSopport FOREIGN KEY ([IdSupporter]) REFERENCES Supporter([IdSupporter]))






Prioridadd


notas y comentario
arbol
colapsar


