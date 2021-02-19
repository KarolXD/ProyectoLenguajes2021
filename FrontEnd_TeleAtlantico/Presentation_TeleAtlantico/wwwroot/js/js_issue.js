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
            console.log("GET ALL ISSUES " + result);
            var html = '';
            $.each(result, function (key, item) {



                var idSu = item.idSupporter;
                if (idSu == "null" || idSu == null) { idSu = "No Asignado" } else { item.idSupporter }

                html += '<tr>';

                html += '<td>' + item.issueId + '</td>';
                html += '<td>' + item.report + '</td>';
                html += '<td>' + idSu + '</td>';
                html += '<td>' + item.clasification + '</td>';
                html += '<td>' + item.status + '</td>';
                html += '<td>' + item.register + '</td>'
                html += '<td><button id="editRequestUser" name="editRequestUser" onclick=getIssueClient(' + item.issueId + ') class="btn btn-warning" >Edit Request </button> </td>';
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
        }
        
        if (status === "RESUELTO" && statusbefore === "EN PROCESO") {
            updatestatusValidated(issueid, status, user, email);
        } else if (status === "RESUELTO" && statusbefore === "SIN ASIGNAR") {
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
                alert("Update status");

            } else
                alert("Not Update ");
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
               alert("Update clasification");
            }
            else
                alert("Not Update ");

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
    $.ajax({
        url: "/Issue/changeSupporterAsigned",
        type: "GET",
        data: { "issue_id": parseInt(issueid), "supporter_id": supporter_id},
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            if (result != null) {
                getIssueClient(issueid);
                getAllIssue();
                getNameSupporterById(supporter_id, emailsend,fullname);
               alert("Update user asigned");
            }else
                alert("Not Update ");
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

            if (result != null) {
               // getIssueClient(issueid);
               // getAllIssue();

                alert("Send message");
            } else
                alert("Not send Message ");
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
            console.log("GET ALL ISSUES "+result);
            var html = '';
            $.each(result, function (key, item) {

          
                
                  var idSu = item.idSupporter;
                if (idSu == "null" || idSu == null) { idSu = "No Asignado" } else { item.idSupporter }
              
                html += '<tr>';

                html += '<td>' + item.issueId+ '</td>';
                html += '<td>' + item.report + '</td>';
                html += '<td>' + idSu + '</td>';
                html += '<td>' + item.clasification + '</td>';
                html += '<td>' + item.status + '</td>';
                html += '<td>' + item.register + '</td>'
                html += '<td><button id="editRequestUser" name="editRequestUser" onclick=getIssueClient(' + item.issueId + ') class="btn btn-warning" >Edit Request </button> </td>';
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


                html += '<tr>';
                html += '<td>' + item.issueId + '</td>';
                html += '<td>' + item.report + '</td>';
                html += '<td>' + item.idSupporter + '</td>';
                html += '<td>' + item.clasification + '</td>';
                html += '<td>' + item.status + '</td>';
                html += '<td>' + item.register + '</td>'
                html += '<td><button onclick=getIssueClientBySopporter(' + item.issueId + ') class="btn btn-warning" >Edit Request</button> </td>';
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


//$('#Note').click(function (e) {
//    document.getElementById('addUserForRequest').style.display = 'none';
//   // document.getElementById('AddComment').style.display = 'none';
//    document.getElementById('AddNote').style.display = 'block';
//    document.getElementById('updateClasification').style.display = 'none';
//    document.getElementById('updateStatus').style.display = 'none';
//});


$('#Comment').click(function (e) {
    document.getElementById('AddComment').style.display = 'block';
   // document.getElementById('AddNote').style.display = 'none';
    document.getElementById('updateClasification').style.display = 'none';
    document.getElementById('updateStatus').style.display = 'none';
    document.getElementById('addUserForRequest').style.display = 'none';
});




$('#status1').click(function (e) {
 //   document.getElementById('AddComment1').style.display = 'none';
 //   document.getElementById('AddNote1').style.display = 'none';
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


