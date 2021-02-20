package com.example.demo;

public class CommentDTO {
    private int comment_id;
    private String description;
    private int issue_id;
    private String usercreation;


    public CommentDTO(int comment_id, String description, int issue_id, String usercreation) {
        this.comment_id = comment_id;
        this.description = description;
        this.issue_id = issue_id;
        this.usercreation = usercreation;
    }




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



}
