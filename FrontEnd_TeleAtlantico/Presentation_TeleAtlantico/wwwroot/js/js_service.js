
//this function loads the website
$(document).ready(function () {


   
   
});


function loadService($i) {
 
    getNameNotHasSupporterById($i);
    getNameHasSupporterById($i);
}


//obtenemos los servicios que el soportista BRINDA
function getNameHasSupporterById(idSupporter) {
    $.ajax({

        url: "/Service/GetNameHasSupporterById",
        type: "GET",
        data: { "idSupporter": idSupporter },
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {


            var html = '';

            $.each(result, function (key, item) {
                html +='<ul>';
                html += '<li value=' + item.idService + '> ' + item.name + '</li>';
                html += '</ul> <br>';
            });
            $("#getServiceHasSupporter").html(html);

        },
        error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    })
}

 
//With this method, load the drobbox for services
//obtenemos los servicios que el soportista no brinda
function getNameNotHasSupporterById(idSupporter) {

    $.ajax({

        url: "/Service/GetNameNotHasSupporterById",
            type: "GET",
            data: { "idSupporter": idSupporter},
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {

                var html = '';
               
                $.each(result, function (key, item) {
               
                   html += '<option value=' + item.idService + '> ' + item.name + '</option>';
                });
                $("#typesServices").html(html);

            },
            error: function (errorMessage) {
                alert(errorMessage.responseText);
            }
        })

}





