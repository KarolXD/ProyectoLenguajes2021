$(document).ready(function () {

    getNameSupervisor();

});





$('#navsecundario1').click(function (e) {
 
    document.getElementById('registerUsers').style.display = 'block';
    document.getElementById('registeredRequest').style.display = 'none';
    document.getElementById('editRequest').style.display = 'none';
    document.getElementById('serviceUser').style.display = 'none';
    document.getElementById('showNotes').style.display = 'none';
});

$('#showService').click(function (e) {

    document.getElementById('serviceUser').style.display = 'block';
    document.getElementById('registerUsers').style.display = 'none';
    document.getElementById('registeredRequest').style.display = 'none';
    document.getElementById('showNotes').style.display = 'none';
});

$('#navsecundario3').click(function (e) {

    document.getElementById('registeredRequest').style.display = 'block';
    document.getElementById('registerUsers').style.display = 'none';
    document.getElementById('serviceUser').style.display = 'none';
    document.getElementById('editRequest').style.display = 'none';
    document.getElementById('showNotes').style.display = 'none';
});




function getNameSupervisor() {
    $.ajax({
        url: "/Supervisor/GetNameSupervisor",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';

            $.each(result, function (key, item) {

                html += '<option value=' + item.idSupervisor + '> ' + item.name + ' ' + item.firstSurname + ' ' + item.secondSurname + '</option>';
            });

           

            $("#TypesSupervisores").html(html);

        },
        error: function (errorMessage) {
           // alert(errorMessage.responseText);
        }
    })

}



function SignOutUSU() {


    $.ajax({
        url: "/Supervisor/SignOut",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //aca recibo el resultado del backend (datos,objetos,mensajes)
            if (result != null) {
               location.href = "/Supporter/Index";
              //  setTimeout("/Supporter/Index", 20000);
            }

        }
        //,error: function (errorMessage) { console.log(errorMessage); } //alert(errorMessage.responseText); 
    });


}
function insertUsuario() {
    var isChecked = document.getElementById('checklike').checked;
    if (isChecked) {
     
        insertSupervisor();
    } else {
    // Si está check Empezar como supporter
        insertSupporter();
  
    }
}


function insertSupervisor() {
    var supervisor = {
        name: $('#name_users').val(),
        firstSurname: $('#first_surname').val(),
        secondSurname: $('#second_surname').val(),
        email: $('#email_users').val(),
        password: $('#password_user').val()
    };
    var result = validarInputs(supervisor.name, supervisor.firstSurname, supervisor.secondSurname, supervisor.email, supervisor.password);
    if (result) { 
       document.getElementById('informationMessage').style.display = 'none';

    $.ajax({
        url: "/Supervisor/InsertSupervisor",
        data: JSON.stringify(supervisor),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //aca recibo el resultado del backend (datos,objetos,mensajes)

            if (result == 1) {
                console.log("Registrado");
             //   alert("registrado");
           //     $("body").load("/Supervisor/Index");
                document.getElementById('informationMessage').style.display = 'block';
                document.getElementById('informationMessage').innerText = 'Created Supervisor';
                document.getElementById("informationMessage").style.color = '#009970';

                $('#informationMessage').hide(10000 * 10);

            } else {
                document.getElementById('informationMessage').style.display = 'block';
                document.getElementById('informationMessage').innerText = ' Supervisor not created';
                document.getElementById("informationMessage").style.color = 'red';
                $('#informationMessage').hide(10000 * 10);
            }
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}//end result
 }

function AutenticationSupervisor(emailUser, passUser) {

    $.ajax({
        url: "/Supervisor/Autentication",
        data: {
            email: emailUser,
            password: passUser
        },
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //aca recibo el resultado del backend (datos,objetos,mensajes)
           
            if (result == null) {
                document.getElementById('messageFailLogin').style.display = 'block';
                document.getElementById('messageFailLogin').innerText = 'Incorrect user y/o password';

                $('#messageFailLogin').hide(10000 * 10);
            }
            else {
               // location.href = "/Supervisor/Index";
             
                setTimeout(location.href = "/Supervisor/Index", 20000);
               // $("body").load("/Supervisor/Index");
             
            }

        }
    });

   
}





//GO BACK FROM SUPERVISOR


$('#goBackfromEditRequest').click(function (e) {
    document.getElementById('registeredRequest').style.display = 'block';
    document.getElementById('editRequest').style.display = 'none';
    document.getElementById('showNotes').style.display = 'none';
    document.getElementById('serviceUser').style.display = 'none';
    document.getElementById('registerUsers').style.display = 'none';

    
});


$('#goBackfromNotes').click(function (e) {
    document.getElementById('registeredRequest').style.display = 'none';
    document.getElementById('editRequest').style.display = 'block';
    document.getElementById('showNotes').style.display = 'none';
    document.getElementById('serviceUser').style.display = 'none';
    document.getElementById('registerUsers').style.display = 'none';
});

$('#goBackfromServicesAsigned').click(function (e) {
    document.getElementById('registeredRequest').style.display = 'none';
    document.getElementById('editRequest').style.display = 'none';
    document.getElementById('showNotes').style.display = 'none';
    document.getElementById('serviceUser').style.display = 'none';
    document.getElementById('registerUsers').style.display = 'block';
});




