package com.example.demo;

import java.io.Serializable;
import java.util.Date;

public class IssueDTO  implements Serializable {



    private int IssueId;
    private int Report;
    private String Clasification="MEDIA";
    private String Status ;
    private Date Register;
    private String Resolution="SIN RESOLVER";

    public IssueDTO(){}
    public IssueDTO(int issueId, int report, String clasification, String status, Date register, String resolution,
                     Date creationDate, Date modificationDate, String userCreation, String modificationUser) {
        IssueId = issueId;
        Report = report;
        Clasification = clasification;
        Status = status;
        Register = register;
        Resolution = resolution;

        CreationDate = creationDate;
        ModificationDate = modificationDate;
        UserCreation = userCreation;
        ModificationUser = modificationUser;
    }

    private Date CreationDate;
    private Date ModificationDate;
    private String UserCreation ;
    private String ModificationUser;


    public int getIssueId() {
        return IssueId;
    }

    public void setIssueId(int issueId) {
        IssueId = issueId;
    }

    public int getReport() {
        return Report;
    }

    public void setReport(int report) {
        Report = report;
    }

    public String getClasification() {
        return Clasification;
    }

    public void setClasification(String clasification) {
        Clasification = clasification;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public Date getRegister() {
        return Register;
    }

    public void setRegister(Date register) {
        Register = register;
    }

    public String getResolution() {
        return Resolution;
    }

    public void setResolution(String resolution) {
        Resolution = resolution;
    }


    public Date getCreationDate() {
        return CreationDate;
    }

    public void setCreationDate(Date creationDate) {
        CreationDate = creationDate;
    }

    public Date getModificationDate() {
        return ModificationDate;
    }

    public void setModificationDate(Date modificationDate) {
        ModificationDate = modificationDate;
    }

    public String getUserCreation() {
        return UserCreation;
    }

    public void setUserCreation(String userCreation) {
        UserCreation = userCreation;
    }

    public String getModificationUser() {
        return ModificationUser;
    }

    public void setModificationUser(String modificationUser) {
        ModificationUser = modificationUser;
    }
}
