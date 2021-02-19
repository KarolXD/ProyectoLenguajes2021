

//this function loads the website
$(document).ready(function () {
  
 

});

function validaVacio(valor) {
    if (valor === "")
        return true;
    else
        return false;
}

function validarInputsAutentication(email, password) {
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(email)) {                                                            
         //alert("Error: La dirección de correo " + email + " es incorrecta.");
        document.getElementById('emailInvalid').innerText = 'Incorrect address email';
        document.getElementById('emailInvalid').style.display = 'block';
        return false;
    }
    if (validaVacio(email) || validaVacio(password) ) {  
        document.getElementById('invalideFields').innerText = 'Empty Inputs';
        document.getElementById('invalideFields').style.display = 'block';
        return false;
    }
    return true;
}
function validarInputs(name, firstName, secondName,email, password) {
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(email)) {
        //alert("Error: La dirección de correo " + email + " es incorrecta.");
        document.getElementById('errorMessage').innerText = 'Incorrect address email';
        document.getElementById('errorMessage').style.display = 'block';
        return false;
    }
    if (validaVacio(email) || validaVacio(password) || validaVacio(name) || validaVacio(firstName) || validaVacio(secondName)) {
        document.getElementById('errorMessage').innerText = ' Empty Inputs';
        document.getElementById('errorMessage').style.display = 'block';
        return false;
    }
    return true;
}

function autenticationUser() {

    var password = $('#name_user').val();
    var email = $('#email_user').val();
    var isChecked = document.getElementById('selector').checked;

    var result = validarInputsAutentication(email, password);

    if (result) { 

    if (isChecked) {

        AutenticationSupervisor(email, password);
      
    } else {
        AutenticationSupporter(email, password);
      
     
    }
    }
   

}



$('#selector').click(function (e) {
    var isChecked = document.getElementById('selector').checked;
    if (isChecked) {
    
        document.getElementById('labelSelector').innerText = 'Start As Supervisor';
        document.getElementById('titleRole').innerText = 'As Supervisor';
    
        
    } else {
        document.getElementById('labelSelector').innerText = 'Start As Supporter';
        document.getElementById('titleRole').innerText = 'As Supporter';
      
    }
})



$('#addasSupervidorIInput').click(function (e) {

    var isChecked = document.getElementById('addasSupervidorIInput').checked;
    if (isChecked) {
      
        document.getElementById('addasSupervidor').innerText = 'Asigned As Supervidor';
        document.getElementById('addasSupervidorIInput').value = 1;
    } else {
       
        document.getElementById('addasSupervidor').innerText = 'Not Asigned As Supervidor';
        document.getElementById('addasSupervidorIInput').value = 0;
    }
})
$('#checklike').click(function (e) {
    
    var isChecked = document.getElementById('checklike').checked;
    if (isChecked) {
        document.getElementById('labellike').innerText = 'Start As Supervisor';
        document.getElementById('titleTypeRole').innerText = 'As Supervisor';
        document.getElementById('TypesSupervisor').style.display = 'none';
        document.getElementById('TypesSupervisores').style.display = 'none';
        document.getElementById('addLikeSupervisor').style.display = 'none';
    } else {
        document.getElementById('labellike').innerText = 'Start As Support';
        document.getElementById('titleTypeRole').innerText = 'As Support';
        document.getElementById('TypesSupervisor').style.display = 'block';
        document.getElementById('TypesSupervisores').style.display = 'block';
        document.getElementById('addLikeSupervisor').style.display = 'block';
        
        
    }
})


