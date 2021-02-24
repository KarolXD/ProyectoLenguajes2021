$(document).ready(function () {
    getNameSupporter();
});




$('#navsecundario5').click(function (e) {
    document.getElementById('registeredRequestByUS').style.display = 'block';
    document.getElementById('editRequestUSO').style.display = 'none';
   
});
$('#startRequestProcess').click(function (e) {
    document.getElementById('registeredRequestByUS').style.display = 'none';
    document.getElementById('editRequestUSO').style.display = 'block';

});




function SignOutSO() {

    $.ajax({
        url: "/Supporter/SignOut",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //aca recibo el resultado del backend (datos,objetos,mensajes)
          
            if (result != null) {
             
                $("body").load("/Supporter/Index");
            }

        }
        //,error: function (errorMessage) { console.log(errorMessage); } //alert(errorMessage.responseText); 
    });


}


//With this, load de select
function getNameSupporter() {
    $.ajax({

        url: "/Supporter/GetNameSupporter",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';

            $.each(result, function (key, item) {
              
                html += '<option value=' + item.idSupporter + '> ' + item.name + " " + item.firstSurname + " " + item.secondSurname + '</option>';
            });
          //  $("#TypesSupporter").html(html);
            $(".usersupporter").html(html);
            
       

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}



/**
 * 
 *Extraer datos del supporter para enviar correo
 */
function getNameSupporterById(supporterId, emailsend, fullname) {
    $.ajax({
        url: "/Supporter/GetNameSupporterById",
        type: "GET",
        data: { "supporterId": supporterId},
        success: function (data) {
            var fullnamesupporter = '';
            $.each(data, function (key, item) {
                fullnamesupporter += item.name +" " +item.firstSurname +" "+ item.secondSurname;
            });
            console.log("Full name suporter: "+fullnamesupporter);

            var description = "Buenas estimado/a " + fullname + ", queremos notificarte que el Soportista asignado a tu caso es: Sr/Sra: " + fullnamesupporter;
            var subject = 'Asignacion de Soportista a su reporte';
            sendEmailCustomer(description, emailsend, subject);

        },
        error: function (errorThrown) {
            alert("error getname supporter");
        }
    });
}


function insertSupporter() {
    var IdSuppervidor = document.getElementById("TypesSupervisores").value;
    var AsignedAsSupervisor = document.getElementById("addasSupervidorIInput").value;

    var supervisor = {
        name: $('#name_users').val(),
        firstSurname: $('#first_surname').val(),
        secondSurname: $('#second_surname').val(),
        email: $('#email_users').val(),
        password: $('#password_user').val(),
        idSupervisor: IdSuppervidor,
        asignedAsSupervisor: AsignedAsSupervisor
    };

    var result = validarInputs(supervisor.name, supervisor.firstSurname, supervisor.secondSurname, supervisor.email, supervisor.password); 
    if (result) { 
        document.getElementById('informationMessage').style.display = 'none';

    $.ajax({
        url: "/Supporter/InsertSupporter",
        data: JSON.stringify(supervisor),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //aca recibo el resultado del backend (datos,objetos,mensajes)

            if (result == 1) {
              
                
                document.getElementById('informationMessage').style.display = 'block';
                document.getElementById('informationMessage').innerText = 'Created Supporter';
                document.getElementById("informationMessage").style.color = '#009970';

                $('#informationMessage').hide(10000 * 10);
            } else {
                document.getElementById('informationMessage').style.display = 'block';
                document.getElementById('informationMessage').innerText = ' Supporter not created';
                document.getElementById("informationMessage").style.color = 'red';

                $('#informationMessage').hide(10000 * 10);
            }

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
    }//end
}

function AutenticationSupporter(emailUser, passUser) {
    $.ajax({
        url: "/Supporter/Autentication",
        data: {
            email: emailUser,
            password: passUser
        },
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json"
        ,
        success: function (result) {
            if (result == null) {
              
            document.getElementById('messageFailLogin').style.display = 'block';
            document.getElementById('messageFailLogin').innerText = 'Incorrect user y/o password';
                $('#messageFailLogin').hide(10000 * 10);
        }else {
            
                $("body").load("/Supporter/Index");

             

            }

        }
       
    });
  
}



//GO BACK FROM SUPPORTER


$('#goBackFromEditRequestUSO').click(function (e) {
    document.getElementById('registeredRequestByUS').style.display = 'block';
    document.getElementById('editRequestUSO').style.display = 'none';
    document.getElementById('showComments').style.display = 'none';
    document.getElementById('showNotes').style.display = 'none';

});

$('#goBackFromComments').click(function (e) {
    document.getElementById('registeredRequestByUS').style.display = 'none';
    document.getElementById('editRequestUSO').style.display = 'block';
    document.getElementById('showComments').style.display = 'none';
    document.getElementById('showNotes').style.display = 'none';

});


$('#goBackFromNotes').click(function (e) {
    document.getElementById('registeredRequestByUS').style.display = 'none';
    document.getElementById('editRequestUSO').style.display = 'block';
    document.getElementById('showComments').style.display = 'none';
    document.getElementById('showNotes').style.display = 'none';

});