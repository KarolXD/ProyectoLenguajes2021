package com.example.demo;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Issue  {

    private int issue_id ;
    private String description;
    private int report;
    private LocalDateTime register;
    private String address;
    private String contactphone;
    private String contactemail   ;
    private String status;
    private int supportusertassigned;
    private int  client_id;
    private int service_id;
    private LocalDateTime creationdate;
    private LocalDateTime modificationdate;
    private String usercreation;
    private String modificationuser;;

    private String name;

    public Issue(){}




    public Issue(int issue_id, String description, int report, LocalDateTime register, String address, String contactphone, String contactemail, String status, int supportusertassigned, int client_id, int service_id, LocalDateTime creationdate, LocalDateTime modificationdate, String usercreation, String modificationuser, String name) {
        this.issue_id = issue_id;
        this.description = description;
        this.report = report;
        this.register = register;
        this.address = address;
        this.contactphone = contactphone;
        this.contactemail = contactemail;
        this.status = status;
        this.supportusertassigned = supportusertassigned;
        this.client_id = client_id;
        this.service_id = service_id;
        this.creationdate = creationdate;
        this.modificationdate = modificationdate;
        this.usercreation = usercreation;
        this.modificationuser = modificationuser;
this.name=name;
    }



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getIssue_id() {
        return issue_id;
    }
    public void setIssue_id(int issue_id) {
        this.issue_id = issue_id;
    }


    public int getClient_id() {
        return client_id;
    }
    public void setClient_id(int client_id) {
        this.client_id = client_id;
    }



    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public int getReport() {
        return report;
    }
    public void setReport(int report) {
        this.report = report;
    }




    public LocalDateTime getRegister() {
        return register;
    }
    public void setRegister(LocalDateTime register) {
        this.register = register;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactphone() {
        return contactphone;
    }
    public void setContactphone(String contactphone) {
        this.contactphone = contactphone;
    }

    public String getContactemail() {
        return contactemail;
    }
    public void setContactemail(String contactemail) {
        this.contactemail = contactemail;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    public int getSupportusertassigned() {
        return supportusertassigned;
    }
    public void setSupportusertassigned(int supportusertassigned) {
        this.supportusertassigned = supportusertassigned;
    }


    public int getService_id() {
        return service_id;
    }
    public void setService_id(int service_id) {
        this.service_id = service_id;
    }

    public LocalDateTime getCreationdate() {
        return creationdate;
    }
    public void setCreationdate(LocalDateTime creationdate) {
        this.creationdate = creationdate;
    }

    public LocalDateTime getModificationdate() {
        return modificationdate;
    }
    public void setModificationdate(LocalDateTime modificationdate) {
        this.modificationdate = modificationdate;
    }

    public String getUsercreation() {
        return usercreation;
    }
    public void setUsercreation(String usercreation) {
        this.usercreation = usercreation;
    }

    public String getModificationuser() {
        return modificationuser;
    }
    public void setModificationuser(String modificationuser) {
        this.modificationuser = modificationuser;
    }


    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }


}
