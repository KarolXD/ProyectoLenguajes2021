package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Comment {

private int comment_id;
private String description;
private LocalDateTime comment;
private int issue_id;
private int isuser;
private String typeuser;
private LocalDateTime creationdate;
private LocalDateTime modificationdate;
private String usercreation;
private String modificationuser;


    public Comment(){}

    public Comment(int comment_id, String description, LocalDateTime comment, int issue_id, LocalDateTime creationdate,
                   LocalDateTime modificationdate, String usercreation, String modificationuser, int isuser, String typeuser) {
        this.comment_id = comment_id;
        this.description = description;
        this.comment = comment;
        this.issue_id = issue_id;
        this.creationdate = creationdate;
        this.modificationdate = modificationdate;
        this.usercreation = usercreation;
        this.modificationuser = modificationuser;
        this.isuser=isuser;
        this.typeuser=typeuser;
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



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getComment_id() {
        return comment_id;
    }

    public void setComment_id(int comment_id) {
        this.comment_id = comment_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getComment() {
        return comment;
    }

    public void setComment(LocalDateTime comment) {
        this.comment = comment;
    }

    public int getIssue_id() {
        return issue_id;
    }

    public void setIssue_id(int issue_id) {
        this.issue_id = issue_id;
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



    public int getIsuser() {
        return isuser;
    }

    public void setIsuser(int isuser) {
        this.isuser = isuser;
    }

    public String getTypeuser() {
        return typeuser;
    }

    public void setTypeuser(String typeuser) {
        this.typeuser = typeuser;
    }




}
