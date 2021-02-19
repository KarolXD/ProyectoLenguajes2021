$(document).ready(function () {



});


function insertSupervisor() {

    var supervisor = {
        name: $('#name').val(),
        email: $('#email').val(),
        password: $('#password').val()
    };

    if (valide_inputs) {

        $.ajax({
            url: "/Supervisor/InsertSupervisor",
            data: JSON.stringify(student),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                //aca recibo el resultado del backend (datos,objetos,mensajes)

                if (result == 1) {
                    
                } else {
            
                }

            },
            error: function (errorMessage) {
                alert(errorMessage.responseText);
            }
        });
    } else {

   }


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

function getSupervisor() {
    alert("enting");
    $.ajax({
        url: "/Supervisor/InsertSupervisor",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td>' + item.studentId + '</td>';
                html += '<td>' + item.name + '</td>';
                html += '<td>' + item.email + '</td>';
                html += '<td>' + item.password + '</td>';
                html += '<td><a  id="myBtn" class="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter"  onclick="return GetById(' + item.studentId + ')">Edit</a> | <a data-toggle="modal" data-target="#exampleModalDelete"   class="btn btn-danger" id="myBtn"  onclick="Delete(' + item.studentId + ')">Delete</a></td>';
            });
            $('.tbody').html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}