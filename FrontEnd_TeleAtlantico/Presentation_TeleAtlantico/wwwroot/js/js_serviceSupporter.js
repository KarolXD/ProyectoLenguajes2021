



//this function loads the website
$(document).ready(function () {


});

function AddServiceSupporter() {
    var nameService = document.getElementById("typesServices").value;
    var idSupporters = document.getElementById("TypesSupporter").value;


  var serviceSupporter = {
      IdService: nameService, IdSupporter: idSupporters
    };



    $.ajax({

        url: "/ServiceSupporter/AddServiceSupporter",
        type: "POST",
        data: (JSON.stringify(serviceSupporter)),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {

            if (result !=null) {
                alert("Servicio Registrado");
            } else {
                alert("Servicio No  Registrado" );
            }
        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })

}
