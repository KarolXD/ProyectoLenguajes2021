
//this function loads the website
$(document).ready(function () {
    


});


function getNotes(typeUser) {
    console.log("typeUser" + typeUser);
    //typeUser==1 Su    typeUser==0 Soportista
    var issue_id = document.getElementById("issue_id").value;
    $.ajax({
        url: "/Note/GetNoteById",
        type: "GET",
        data: { "issue_id": issue_id},
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
          
            var html = '';
            $.each(result, function (key, item) {

             
              
           
                if (typeUser == 1) {//si es 1 es supervisor

                    if (item.isUserSu == 1) {//es Supervisor

                        html += '<div> <div class="input-group-prepend"> <span class="input-group-text">' + item.typeUser + "| " + item.noteTime + '</span></div> <textarea id="' + item.idNote + '"  class="form-control" aria-label=>' + item.name + '</textarea>       <button class="btn btn-warning" onclick=updateNote(' + item.idNote + ',' + item.issueId + ',' + item.isUserSu + ')>Save  </button></div>';

                        html += '<hr/>';
                    }

                    if (item.isUserSu == 0) {//es soportista
                   
                        html += '<div> <div class="input-group-prepend"> <span class="input-group-text">' + item.typeUser + "| " + item.noteTime + '</span></div> <textarea disabled    class="form-control" aria-label=>' + item.name + '</textarea></div>';
                        html += '<hr/>';
                    }

                } if (typeUser == 0) { //si es soportista
                  

                    if (item.isUserSu == 1) {//es Supervisor
                        html += '<div> <div class="input-group-prepend"> <span class="input-group-text">' + item.typeUser + "| " + item.noteTime + '</span></div> <textarea disabled    class="form-control" aria-label=>' + item.name + '</textarea>  </div>'; //onclick=getIssueClient(' + item.issueId + ')
                        html += '<hr/>';
                    }

                    if (item.isUserSu == 0) {//es soportista
                        html += '<div> <div class="input-group-prepend"> <span class="input-group-text">' + item.typeUser + "| " + item.noteTime + '</span></div> <textarea  id="' + item.idNote + '"   class="form-control" aria-label=>' + item.name + ' </textarea> <button class="btn btn-warning" onclick=updateNote(' + item.idNote + ',' + item.issueId + ',' + item.isUserSu+')>  Save </button> </div>';
                        html += '<hr/>';
                    }

                }
           

           });
            $('.chats').html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}

function updateNote(idNote, issue_id, user) {

    //console.log("idNote" + idNote + ",issue_id" + issue_id + ",isuser" + user);

    if (user == 1) {
        var description = document.getElementById(idNote).value;
     //   alert("Descripcion SUPERVISOR => "+description);
    }

         
    if (user == 0) {
        var description = document.getElementById(idNote).value;
     //   alert("Descriptio Suportista: "+description);

    }
   
    
  
  
    $.ajax({
        url: "/Note/updateNote",
        data: { "idNote": idNote, "issue_id": issue_id, "description": description, "user": user },
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //aca recibo el resultado del backend (datos,objetos,mensajes)
            if (result == 1) {

                if (user == 1) {//Si el usuario es supervisor, despliego las notas de supervidor y soportista desabilitadas
                    getNotes(1);
                } else {
                    getNotes(0);
                }

                alert("Nota Actualizada");
            } else {
                alert("NO Actualizada");
            }
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });

}
function addNote(user) {
    //1 Supervisor    0 Soportista
    var issue_id =   document.getElementById("idIssueNotes").value;
    var description = document.getElementById("descriptionNotes").value;
    $.ajax({
        url: "/Note/insertNote",
        data: { "issue_id": issue_id,"description": description,"user":user},
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //aca recibo el resultado del backend (datos,objetos,mensajes)

            if (result == 1) {

                if (user == 1) {//Si el usuario es supervisor, despliego las notas de supervidor y soportista desabilitadas
                    getNotes(1);
                } else {
                    getNotes(0);
                }

                alert("Nota Regidtrada");
            } else {
                alert("NO registrado");
            }
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });

}

function addComments() {

    var issue_id = document.getElementById("idIssueComments").value;
    var description = document.getElementById("descriptionComments").value;
    $.ajax({
        url: "/Note/insertComment",
        data: { "issue_id": issue_id, "description": description },
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //aca recibo el resultado del backend (datos,objetos,mensajes)

            if (result == 1) {
                getComments();
                alert("Comment registrado");
            } else {
                alert("Comment NO registrado");
            }
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}


function updateComments(comment_id,issue_id,user) {

    var description = document.getElementById(comment_id).value;

    

    $.ajax({
        url: "/Note/updateComment",
        data: { "comment_id": comment_id,"issue_id": issue_id, "description": description },
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            //aca recibo el resultado del backend (datos,objetos,mensajes)

            if (result == 1) {
                getComments();
                alert("Comment update");
            } else {
                alert("Comment NO update");
            }
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
}
function getComments() {
    var issue_id = document.getElementById("issue_id").value;

    $.ajax({
        url: "/Note/GetCommentById",
        type: "GET",
        data: { "issue_id": issue_id },
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
          //  console.log("Comments" + result);
            var html = '';
            $.each(result, function (key, item) {

            
                console.log(item.comment_id);
               
                    console.log(item.issue_id);
                if (item.isuser ==0) {
                    html += '<div> <div class="input-group-prepend"> <span class="input-group-text">' + item.typeuser + "| " + item.comment + '</span></div> <textarea disabled  id="' + item.comment_id +'" class="form-control" aria-label=>' + item.description + '</textarea></div>';
                    html += '<hr/>';

                
                } if (item.isuser ==1)  {
                    html += '<div> <div class="input-group-prepend"> <span class="input-group-text">' + item.typeuser + "| " + item.comment + '</span></div> <textarea  id="' + item.comment_id + '"  class="form-control" aria-label=>' + item.description + '</textarea><button class="btn btn-warning" onclick=updateComments(' + item.comment_id + ',' + item.issue_id + ',' + item.isuser +')>  Save </button></div>';
                    html += '<hr/>';

                }

            });
            $('.chatsCommens').html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}