$(document).ready(function () {
    getNameSupporter();
    getNameSupporterBySu();
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

function getNameSupporter() {
    $.ajax({

        url: "/Supporter/GetNameSupporter",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';

            $.each(result, function (key, item) {
              
                html += '<option value=' + item.idSupporter + '> ' + item.name + '</option>';
            });
            $("#TypesSupporter").html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}
function getNameSupporterBySu() {
    $.ajax({

        url: "/Supporter/GetNameSupporter",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';

            $.each(result, function (key, item) {

                html += '<option value=' + item.idSupporter + '> ' + item.name + '</option>';
            });
            $("#TypesSupporterSU").html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}

function getNameSupporterById(supporterId, emailsend, fullname) {
    $.ajax({
        url: "/Supporter/GetNameSupporterById",
        type: "GET",
        data: { "supporterId": supporterId},
        success: function (data) {
            var fullnamesupporter = '';
            $.each(data, function (key, item) {
                fullnamesupporter += item.name;
            });
            console.log("Full name suporter: "+fullnamesupporter);

            var description = "Buenas estimado/a" + fullname + ", queremos notificarte que el Soportista asignado a tu caso es: Sr/Sra: " + fullnamesupporter;
            var subject = 'Asignacion de Soportista a su reporte';
            sendEmailCustomer(description, emailsend, subject);

        },
        error: function (errorThrown) {
            alert("error getname supporter");
        }
    });
}

function getNameSupporterById1(supporterId) {

    $.ajax({

        url: "/Supporter/GetNameSupporterById",
        type: "GET",
        data: { "supporterId": supporterId},
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
       
            $.each(result, function (key, item) {
             html += item.name;
            });
            console.log(html)

        },

        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

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
    $.ajax({
        url: "/Supporter/InsertSupporter",
        data: JSON.stringify(supervisor),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //aca recibo el resultado del backend (datos,objetos,mensajes)

            if (result == 1) {
                alert("registrado y actualizado");
                $("#login").load("/Supporter/Index");
                
                document.getElementById('informationMessage').innerText = 'Created Supporter';
            } else {
                alert("NO registrado");
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
            document.getElementById('messageFailLogin').innerText = 'Incorrect dates';
          
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