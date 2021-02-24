package com.example.demo;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
//@AllArgsConstructor
@NoArgsConstructor
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class IssueClientDTO {


    private int issue_id;
    private int report;
    private String name;
    private String firstsurname;
    private String secondsurname;
    private String email;
    private String phone;
    private String address;
    private String secondcontact;
    private String status;
    private String contactemail;
    private String contactphone;
    private String nameservice;

    public IssueClientDTO(int issue_id, int report, String name, String firstsurname, String secondsurname, String email, String phone, String address, String secondcontact, String status, String contactemail, String contactphone,String nameservice) {
        this.issue_id = issue_id;
        this.report = report;
        this.name = name;
        this.firstsurname = firstsurname;
        this.secondsurname = secondsurname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.secondcontact = secondcontact;
        this.status = status;
        this.contactemail = contactemail;
        this.contactphone = contactphone;
        this.nameservice=nameservice;
    }



}
