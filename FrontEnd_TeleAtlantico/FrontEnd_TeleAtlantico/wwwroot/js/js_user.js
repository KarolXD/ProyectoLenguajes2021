

//this function loads the website
$(document).ready(function () {

 

});



function autenticationUser() {

    var name = $('#name_user').val();
    var email = $('#email_user').val();
    var isChecked = document.getElementById('selector').checked;
    if (isChecked) {
      
        alert("Nombre"+name+ "email"+email +"Start By Supervisor");
        viewSuppervisor();
    } else {
        alert("Nombre" + name + "email" + email + "Start By Supporter");
        viewSupport();
    }
    
    ocultarnavprincipal();
    document.getElementById('login').style.display = 'none';//Hide Login
    document.getElementById('navsecundario4').style.display = 'block';//look Sign Up

}

function ocultarnavprincipal() {
    for (let step = 1; step < 5; step++) {
        var etiquetaid = "navprimario" + step;
        console.log(etiquetaid);
        document.getElementById(etiquetaid).style.display = 'none';
    }
    document.getElementById('navprimario').style.display = 'none';//Hide Login
    document.getElementById('services').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('header').style.display = 'none';
}

function salir_navsecundario() {

    for (let step = 2; step < 6; step++) {
        var etiquetaid = "navsecundario" + step;
        console.log(etiquetaid);
        document.getElementById(etiquetaid).style.display = 'none';
    }
    document.getElementById('navprimario').style.display = 'block';
    document.getElementById('login').style.display = 'block';
    //document.getElementById('navsecundario4').style.display = 'none';//boton cerrar cesion
  

    for (let step = 1; step < 5; step++) {
        var etiquetaid = "navprimario" + step;
        console.log(etiquetaid);
        document.getElementById(etiquetaid).style.display = 'block';
    }

    //Hide other view support and supervisor

    document.getElementById('editRequest').style.display = 'none';
    document.getElementById('registeredRequest').style.display = 'none';
    document.getElementById('registeredRequestByUS').style.display = 'none';
    document.getElementById('issues').style.display = 'none';
    document.getElementById('editRequestUSO').style.display = 'none';
}

function viewSuppervisor() {
    document.getElementById('navsecundario5').style.display = 'none';
    document.getElementById('navsecundario3').style.display = 'block';

    $("#editRequestUser").click(function (e) {
      //  alert("Abriendo edit Request Suppervisor");
        document.getElementById('editRequest').style.display = 'block';
        document.getElementById('editRequestUSO').style.display = 'none';
        document.getElementById('issues').style.display = 'none';
        document.getElementById('registeredRequest').style.display = 'none';
        document.getElementById('registeredRequestByUS').style.display = 'none';
    })

    $("#navsecundario3").click(function (e) {
        document.getElementById('registeredRequest').style.display = 'block';
        document.getElementById('registeredRequestByUS').style.display = 'none';
        document.getElementById('issues').style.display = 'none';
        document.getElementById('editRequest').style.display = 'none';
        document.getElementById('registeredRequestByUS').style.display = 'none';
    })

   
}
function viewSupport() {

    document.getElementById('navsecundario3').style.display = 'none';
    document.getElementById('navsecundario5').style.display = 'block';


    $("#startRequestProcess").click(function (e) {
       // alert("Abriendo edit Request Support");
        document.getElementById('editRequestUSO').style.display = 'block';
        document.getElementById('registeredRequestByUS').style.display = 'none';
        document.getElementById('editRequest').style.display = 'none';
        document.getElementById('registeredRequest').style.display = 'none';
        document.getElementById('issues').style.display = 'none';
    })
    
/*Reques Sopporte*/
    $("#navsecundario5").click(function (e) {
        document.getElementById('registeredRequestByUS').style.display = 'block';
        document.getElementById('registeredRequest').style.display = 'none';
        document.getElementById('editRequestUSO').style.display = 'none';
        document.getElementById('editRequest').style.display = 'none';
        document.getElementById('issues').style.display = 'none';
       
    })
 


}






$('#selector').click(function (e) {
  
    var isChecked = document.getElementById('selector').checked;
    if (isChecked) {
    
        document.getElementById('labelSelector').innerText = 'Start By Supervisor';
    } else {
        document.getElementById('labelSelector').innerText = 'Start By Supporte';
      
    }
})

$('#checklike').click(function (e) {
    
    var isChecked = document.getElementById('checklike').checked;
    if (isChecked) {
        document.getElementById('labellike').innerText = 'Start By Supervisor';
        document.getElementById('TypesSupervisor').style.display = 'none';
        document.getElementById('typesService').style.display = 'none';
    } else {
        document.getElementById('labellike').innerText = 'Start By Support';
        document.getElementById('TypesSupervisor').style.display = 'block';
        document.getElementById('typesService').style.display = 'block';
        
    }
})




$('#modalInsertUsert').click(function (e) {
    $('#exampleModalCenter').modal('show');
})


$('#closeWindow').click(function (e) {
    $('#exampleModalCenter').modal('hide');

})

