$(document).ready(function () {

    getNameSupervisor();

});





$('#navsecundario1').click(function (e) {
 
    document.getElementById('registerUsers').style.display = 'block';
    document.getElementById('registeredRequest').style.display = 'none';
    document.getElementById('editRequest').style.display = 'none';
    document.getElementById('serviceUser').style.display = 'none';
});

$('#showService').click(function (e) {

    document.getElementById('serviceUser').style.display = 'block';
    document.getElementById('registerUsers').style.display = 'none';
    document.getElementById('registeredRequest').style.display = 'none';
});

$('#navsecundario3').click(function (e) {

    document.getElementById('registeredRequest').style.display = 'block';
    document.getElementById('registerUsers').style.display = 'none';
    document.getElementById('serviceUser').style.display = 'none';
    document.getElementById('editRequest').style.display = 'none';
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
              
                //   $("#typesServices").append('<option value=' + item.idService + '>' + item.name + '</option>');
                html += '<option value=' + item.idSupervisor + '> ' + item.name + '</option>';
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
    $.ajax({
        url: "/Supervisor/InsertSupervisor",
        data: JSON.stringify(supervisor),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //aca recibo el resultado del backend (datos,objetos,mensajes)

            if (result == 1) {
                alert("registrado");
                $("body").load("/Supervisor/Index");
                document.getElementById('informationMessage').innerText = 'Created Supervisor';
            } else {
                alert("NO registrado");
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
                document.getElementById('messageFailLogin').innerText = 'Incorrect dates';
            }
            else {
               // location.href = "/Supervisor/Index";
             
                setTimeout(location.href = "/Supervisor/Index", 20000);
               // $("body").load("/Supervisor/Index");
             
            }

        }
    });

   
}

function getSupervisorById(studentId) {
    document.getElementById("id_student").value = studentId;
    $.ajax({
        type: 'GET',
        url: "/Home/GetStudentById",
        data: { "studentId": studentId },
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (response) {
            console.log(response.name);
            document.getElementById("name_student").value = response.name;
            document.getElementById("email_student").value = response.email;
            document.getElementById("password_student").value = response.password;


        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
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





