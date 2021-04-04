# ProyectoLenguajes2021


Subiendo cosas a git

git init

git add nombrefolder

o todo git add .

git commit -m "sibiendo proyecto"
git push -u origin master



Para actualizar el repo


git checkout master

git fetch origin master
git pull
git push



--------------

Install-Package Microsoft.EntityFrameworkCore.SqlServer  

Install-Package Microsoft.EntityFrameworkCore.Tools  

Scaffold-DbContext "Server=DESKTOP-V2VCPIJ;Initial Catalog=TELE_ATLANTICO_2021_B64543_CLIENTE;User ID=sa;Password=123456" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -Tables CLIENT,ISSUE


--Update Proyecto
Scaffold-DbContext "Server=DESKTOP-V2VCPIJ;Initial Catalog=User_TA_2021;User ID=sa;Password=123456" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -f
