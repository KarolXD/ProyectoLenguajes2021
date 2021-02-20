package com.example.controller;

import com.example.demo.Comment;
import com.example.demo.CommentDTO;
import com.example.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequestMapping(path = "/comment")
@CrossOrigin(origins = "http://localhost:4200" , allowedHeaders="*")

public class CommentController {



    @Autowired
    private CommentService service;

    @RequestMapping(path = "/comments/{issue_id}", method = RequestMethod.GET)
    public List<Comment> list(@PathVariable int issue_id){
        return  service.listComment(issue_id); }


    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public void add(@RequestBody Comment comment){
        comment.setCreationdate(LocalDateTime.now());
        comment.setComment(LocalDateTime.now());
        service.save(comment);
    }

    @RequestMapping(value = "update/{id}", method = RequestMethod.PUT)
    public void update(@RequestBody CommentDTO comment, @PathVariable("id") int  id){
   System.out.println("Entre id"+id);
        System.out.println("getIssue_id"+comment.getIssue_id());
        System.out.println("getDescription"+comment.getDescription());
        System.out.println("getUsercreation"+comment.getUsercreation());
        service.updatecomment(id,comment.getIssue_id(), comment.getDescription(),comment.getUsercreation());
    }




}
