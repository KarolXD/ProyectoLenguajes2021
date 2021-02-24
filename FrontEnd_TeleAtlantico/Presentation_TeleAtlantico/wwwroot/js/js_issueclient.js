$(document).ready(function () {

 
});

function getIssueClient(issue_id) {
        $.ajax({
            url: "/IssueClient/getDetailsIssueClient",
            type: "GET",
            data: { "issue_id": issue_id },
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                var html = '';

                console.log(result)
                $.each(result, function (key, item) {
                    showhideelementstoSupervidor();
                    console.log(item.name);

                    document.getElementById('showreport').innerText = item.report;
                    document.getElementById('showfullname').innerText = item.name + " " + item.firstsurname + " " + item.secondsurname;
                    document.getElementById('showemail').innerText = item.email;
                    document.getElementById('showphone').innerText = item.phone;
                    document.getElementById('showaddress').innerText = item.address;
                    document.getElementById('showsecondcontact').innerText = item.secondcontact;
                    document.getElementById('showstatus').innerText = item.status;
                    document.getElementById('showcontactemail').innerText = item.contactemail;
                    document.getElementById('showcontactphone').innerText = item.contactphone;
                    document.getElementById('showservicename').innerText = item.nameservice;

                    

                    document.getElementById('issue_id').value = item.issue_id;
                
                    
                    document.getElementById('idIssueNotes').value = item.issue_id;

                    document.getElementById('emailsendtoclient').value = item.contactemail;
                    document.getElementById('fullnamee').value = item.name + " " + item.firstsurname + " " + item.secondsurname;



                });

            },
            error: function (errorMessage) {
                alert("ERROR"+errorMessage.responseText);
            }
        })

}

function getIssueClientBySopporter(issue_id) {
    $.ajax({
        url: "/IssueClient/getDetailsIssueClient",
        type: "GET",
        data: { "issue_id": issue_id },
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $.each(result, function (key, item) {
                showhideelementstoSupporter();
                console.log(item.name);

                document.getElementById('showreport').innerText = item.report;
                document.getElementById('showfullname').innerText = item.name + " " + item.firstsurname + " " + item.secondsurname;
                document.getElementById('showemail').innerText = item.email;
                document.getElementById('showphone').innerText = item.phone;
                document.getElementById('showaddress').innerText = item.address;
                document.getElementById('showsecondcontact').innerText = item.secondcontact;
                document.getElementById('showstatus').innerText = item.status;
                document.getElementById('showcontactemail').innerText = item.contactemail;
                document.getElementById('showcontactphone').innerText = item.contactphone;
                document.getElementById('showservicename').innerText = item.nameservice;

                document.getElementById('issue_id').value = item.issue_id;

                document.getElementById('idIssueNotes').value = item.issue_id;
                document.getElementById('idIssueComments').value = item.issue_id;


                document.getElementById('emailsendtoclient').value = item.contactemail;
                document.getElementById('inputstatus').value = item.status;

            });
            //$('.tbody_issues').html(html);

        },
        error: function (errorMessage) {
            alert("ERROR" + errorMessage.responseText);
        }
    })

}