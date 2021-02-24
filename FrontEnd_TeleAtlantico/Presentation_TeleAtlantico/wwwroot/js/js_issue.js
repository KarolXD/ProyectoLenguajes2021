//import { data } from "jquery";

//this function loads the website
$(document).ready(function () {
    getAllIssue_supports();
    getAllIssue();





});

function filterIssue() {
   var filterby= document.getElementById("filterIssue").value;

    console.log(filterby);
    if (filterby == "STATUS") 
        filterIssueBy("GetAllRequestOrderByStatus");

      else
        filterIssueBy("GetAllRequestOrderByClasification");

    


}

function filterIssueBy(filter) {
    //GetAllRequestOrderByClasification
//
    $.ajax({
        url: "/Issue/" + filter,
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {



                var idSu = item.idSupporter;
                if (idSu == "null" || idSu == null) { idSu = "No Asignado" } else { item.idSupporter }
                var classificationeimg = item.clasification;

                if (item.clasification == "ALTA") {
                    classificationeimg = '<img src="../img/redpriority.png" /> ' + item.clasification;
                }
                if (item.clasification == "BAJA") {
                    classificationeimg = '<img src="../img/greenpriority.png" /> ' + item.clasification;
                }
                if (item.clasification == "MEDIA") {
                    classificationeimg = '<img src="../img/orangepriority.png" /> ' + item.clasification;
                }
                html += '<tr>';

                html += '<td>' + item.issueId + '</td>';
                html += '<td>' + item.report + '</td>';
                html += '<td>' + idSu + '</td>';
                html += '<td>' + classificationeimg + '</td>';
                html += '<td>' + item.status + '</td>';
                html += '<td>' + item.register + ' <img src="../img/clock.png" />    </td>'
                html += '<td><a href="javascript:void(0);"  id="editRequestUser" name="editRequestUser" onclick=getIssueClient(' + item.issueId + ')  > <img src="../img/share.png" />  </a> </td>';
            });
            $('.tbody_issues').html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}

function changestatus(user) {
    var issueid = $('#issue_id').val();
    var status = document.getElementById("statuss").value;
    var email = document.getElementById("emailsendtoclient").value;

    if (user == 0) {
        var statusbefore = document.getElementById("inputstatus").value;

        if (status === "EN PROCESO" && statusbefore === "ASIGNADO")
            updatestatusValidated(issueid, status, user, email);
        else if (status === "EN PROCESO" && statusbefore === "SIN ASIGNAR"){
            alert("El reporte debe estar en estado ASIGNADO para pasarlo a EN PROCESO");

        } else if (status === "EN PROCESO" && statusbefore === "INGRESADO") {
            alert("El reporte debe estar en estado ASIGNADO para pasarlo a EN PROCESO")
        }


        
        if (status === "RESUELTO" && statusbefore === "EN PROCESO") {
            updatestatusValidated(issueid, status, user, email);
        } else if (status === "RESUELTO" && statusbefore === "SIN ASIGNAR") {
            alert("El reporte debe estar en estado EN PROCESO para pasarlo a RESUELTO")
        }
        else if (status === "RESUELTO" && statusbefore === "INGRESADO") {
            alert("El reporte debe estar en estado ASIGNADO para pasarlo a RESUELTO")
        }
        else if (status === "RESUELTO" && statusbefore === "ASIGNADO") {
            alert("El reporte debe estar en estado EN PROCESO para pasarlo a RESUELTO")
        }
        

    } else {
        updatestatusValidated(issueid, status, user, email);
    }


}

function updatestatusValidated(issueid, status, user,email) {
    $.ajax({
        url: "/Issue/changeStatus",
        type: "GET",
        data: { "issue_id": parseInt(issueid), "status": status, "user": parseInt(user) },
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result != null) {

                if (user == 1) {//supervisor
                    getIssueClient(issueid);
                    getAllIssue();
                } else {
                    var description = "Buenas estimado/a cliente, es para notificarle que su reporte ya está: " + status;
                    var subject = 'Cambio de estado a su reporte';
                    sendEmailCustomer(description, email, subject);
                    getIssueClientBySopporter(issueid);
                    getAllIssue_supports();
                }
              

                document.getElementById('updatingss').style.display = 'block';
                document.getElementById('updatingss').style.background = '#A0DEC6';
                document.getElementById('updatings').innerHTML = 'Status update to: ' + status;
             //   $('#updatingss').hide(1000 * 10);

            } else {

                document.getElementById('updatingss').style.display = 'block';
                document.getElementById('updatingss').style.background = 'red';
                document.getElementById('updatings').innerHTML = 'Status not updae ';
                $('#updatingss').hide(1000 * 10);
            }
        },
        error: function (errorMessage) {
            alert("ERROR" + errorMessage.responseText);
        }
    })
}

function changeclasification() {
    var issueid = document.getElementById("issue_id").value;
    var clasification = document.getElementById("clasification").value;

    $.ajax({
        url: "/Issue/changeClasification",
        type: "GET",
        data: { "issue_id": parseInt(issueid), "clasification": clasification },
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {

            if (result != null) {
                getIssueClient(issueid);
                getAllIssue();
                console.log("updated");
                // alert("Update clasification");
                //   $('#updatings').show(1);
                document.getElementById('updatingss').style.display = 'block';
                document.getElementById('updatingss').style.background = '#A0DEC6';
                document.getElementById('updatings').innerHTML = 'Priority change to: ' + clasification;
              //  $('#updatingss').hide(10000 * 10);
            }
            else {
                document.getElementById('updatingss').style.display = 'block';
                document.getElementById('updatingss').style.background = '#A0DEC6';
                document.getElementById('updatings').innerHTML = 'Priority not changd';
                $('#updatingss').hide(10000 * 10);
            }

        },
        error: function (errorMessage) {
            alert("ERROR" + errorMessage.responseText);
        }
    })
}

function changeuserasigned() {
    var issueid = $("#issue_id").val();
    var supporter_id = document.getElementById("TypesSupporterSU").value; 
    var emailsend = document.getElementById("emailsendtoclient").value;


    var fullname = document.getElementById("fullnamee").value;

    console.log("changeuser " + fullname);

    $.ajax({
        url: "/Issue/changeSupporterAsigned",
        type: "GET",
        data: { "issue_id": parseInt(issueid), "supporter_id": supporter_id},
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            console.log(result);
            console.log(result.result);

            //Si el resultado es 1 quiere decir que el supporter SI brinda el servicio que se registra en el issue
            if (result.result == 1) {

                getIssueClient(issueid);
                getAllIssue();
                getNameSupporterById(supporter_id, emailsend, fullname);
             


                document.getElementById('updatingss').style.display = 'block';
                document.getElementById('updatingss').style.background = '#A0DEC6';
                document.getElementById('updatings').innerHTML = 'Supporter asigned, and message send to client.';
                //60 s = 1 min
              //  $('#updatingss').hide(10000 * 10);
                alert("El soportista asignado si brinda este servicio");

                //Si el resultado es 2 quiere decir que el supporter NO brinda el servicio que se registra en el issue
            } if (result.result == 2) {
                alert("Lo sentimos, el soportista asignado, no brinda el servicio que reporta este issue");

            } if (result.result == 0) {

                document.getElementById('updatingss').style.display = 'block';
                document.getElementById('updatingss').style.background = 'red';
                document.getElementById('updatings').innerHTML = 'Supporter not asigned ';
                $('#updatingss').hide(10000 * 10);
            }
        },
        error: function (errorMessage) {
            alert("Error trying to add  and user asigned" + errorMessage.responseText);
        }
    })
}

function sendEmailCustomer(body, email, subject) {
    $.ajax({
        url: "/Issue/sendEmail",
        type: "GET",
        data: { "body": body, "email": email, "subject": subject},
        contentType:"application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
  },
        error: function (errorMessage) {
            alert("Error trying to send message" + errorMessage.responseText);
        }
    })
}

function getAllIssue() {

    $.ajax({
        url: "/Issue/GetAllRequest",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
         
            var html = '';
            $.each(result, function (key, item) {               
                 var idSu = item.idSupporter;
                if (idSu == "null" || idSu == null) { idSu = "No Asignado" } else { item.idSupporter }

                var classificationeimg = item.clasification;

                if (item.clasification == "ALTA") {
                    classificationeimg = '<img src="../img/redpriority.png" /> ' + item.clasification;
                }
                 if (item.clasification == "BAJA") {
                        classificationeimg = '<img src="../img/greenpriority.png" /> ' + item.clasification;
                }
                if (item.clasification == "MEDIA") {
                    classificationeimg = '<img src="../img/orangepriority.png" /> ' + item.clasification;
                }
                html += '<tr>';
                html += '<td>' + item.issueId+ '</td>';
                html += '<td>' + item.report + '</td>';
                html += '<td>' + idSu + '</td>';
                html += '<td>' + classificationeimg + '</td>';
                html += '<td>' + item.status + '</td>';
                html += '<td>' + item.register + ' <img src="../img/clock.png" />    </td>'
                html += '<td><a  href="javascript:void(0);" id="editRequestUser" name="editRequestUser" onclick=getIssueClient(' + item.issueId + ') class="" ><img src="../img/share.png" />  </a> </td>';
            });
            $('.tbody_issues').html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}


function getAllIssue_supports() {
    $.ajax({
        url: "/Issue/GetAllRequestById",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            
            var html = '';
            $.each(result, function (key, item) {
                var classificationeimg = item.clasification;

                if (item.clasification == "ALTA") {
                    classificationeimg = '<img src="../img/redpriority.png" /> ' + item.clasification;
                }
                if (item.clasification == "BAJA") {
                    classificationeimg = '<img src="../img/greenpriority.png" /> ' + item.clasification;
                }
                if (item.clasification == "MEDIA") {
                    classificationeimg = '<img src="../img/orangepriority.png" /> ' + item.clasification;
                }
                
                html += '<tr>';
                html += '<td>' + item.issueId + '</td>';
                html += '<td>' + item.report + '</td>';
                html += '<td>' + item.idSupporter + '</td>';
                html += '<td>' + classificationeimg + '</td>';
                html += '<td>' + item.status + '</td>';
                html += '<td>' + item.register + ' <img src="../img/clock.png" />    </td>';
                html += '<td><a  href="javascript:void(0);"  onclick=getIssueClientBySopporter(' + item.issueId + ') class="" > <img src="../img/share.png" /> </a> </td>';
            });
            $('.tbody_issues_supporters').html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}

function showhideelementstoSupervidor() {
  document.getElementById('editRequest').style.display = 'block';
  document.getElementById('registeredRequest').style.display = 'none';
  document.getElementById('registerUsers').style.display = 'none';
   document.getElementById('serviceUser').style.display = 'none';
   document.getElementById('serviceUser').style.display = 'showNotes';
    
}

function showhideelementstoSupporter(idIssue) {

    document.getElementById('editRequestUSO').style.display = 'block';
    document.getElementById('registeredRequestByUS').style.display = 'none';
   
}


$('#AssignedUser').click(function (e) {
    document.getElementById('addUserForRequest').style.display = 'block';
    //document.getElementById('AddComment').style.display = 'none';
   // document.getElementById('AddNote').style.display = 'none';
    document.getElementById('updateClasification').style.display = 'none';
    document.getElementById('updateStatus').style.display = 'none';
  
});



$('#status').click(function (e) {
    document.getElementById('addUserForRequest').style.display = 'none';
   // document.getElementById('AddComment').style.display = 'none';
    //document.getElementById('AddNote').style.display = 'none';
    document.getElementById('updateClasification').style.display = 'none';
    document.getElementById('updateStatus').style.display = 'block';

});



$('#Clasification').click(function (e) {
    document.getElementById('addUserForRequest').style.display = 'none';
    //document.getElementById('AddComment').style.display = 'none';
  //  document.getElementById('AddNote').style.display = 'none';
    document.getElementById('updateClasification').style.display = 'block';
    document.getElementById('updateStatus').style.display = 'none';

});



$('#Comment').click(function (e) {
    document.getElementById('AddComment').style.display = 'block';
   // document.getElementById('AddNote').style.display = 'none';
    document.getElementById('updateClasification').style.display = 'none';
    document.getElementById('updateStatus').style.display = 'none';
    document.getElementById('addUserForRequest').style.display = 'none';
});




$('#status1').click(function (e) {
    document.getElementById('updateStatus1').style.display = 'block';

});


/*Supervisor*/
$('#clickNotes').click(function (e) {
    document.getElementById('showNotes').style.display = 'block';
    document.getElementById('editRequest').style.display = 'none';
    document.getElementById('registeredRequest').style.display = 'none';
    document.getElementById('serviceUser').style.display = 'none';

});


$('#clickNotesSO').click(function (e) {
    document.getElementById('showNotes').style.display = 'block';
    document.getElementById('showComments').style.display = 'none';
    document.getElementById('editRequestUSO').style.display = 'none';
    document.getElementById('registeredRequestByUS').style.display = 'none';

});

$('#clickComments').click(function (e) {
    document.getElementById('showComments').style.display = 'block';
    document.getElementById('showNotes').style.display = 'none';
    document.getElementById('editRequestUSO').style.display = 'none';
    document.getElementById('registeredRequestByUS').style.display = 'none';

});


