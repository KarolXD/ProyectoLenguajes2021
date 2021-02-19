
//this function loads the website
$(document).ready(function () {


    getNameService();
   
});



    function getNameService() {
        $.ajax({

            url: "/Service/GetNameService",
            type: "GET",
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





