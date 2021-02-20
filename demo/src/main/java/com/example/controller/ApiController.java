package com.example.controller;

import com.example.demo.Comment;
import com.example.demo.CommentDTO;
import com.example.demo.IssueClientDTO;
import com.example.demo.IssueDTO;
import com.example.service.CommentService;
import com.example.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:56642/api/" , allowedHeaders="*")
public class ApiController {



    @Autowired
    private IssueService services;

    @Autowired
    private CommentService serviceComment;


    public void  insertissue(IssueDTO issueDTO)  {
        try{
            String uri = "http://localhost:56642/api/issue/PostIssue";
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<IssueDTO>  result = restTemplate.postForEntity(uri,issueDTO ,IssueDTO.class);


        }catch(Exception e){
            System.out.println("Error -> "+e);
        }
    }


    @RequestMapping(path = "/issue/getDetailsIssueClient/{issue_id}", method = RequestMethod.GET)
    public List<IssueClientDTO> join(@PathVariable int issue_id) {
        System.out.println(services.getJoinInformation(issue_id));
        return services.getJoinInformation(issue_id);
    }


    @RequestMapping(path = "/issue/updateStatus/{issue_id}/{status}/{modificationsser}", method = RequestMethod.GET)
    public void updateStatus(@PathVariable int issue_id,@PathVariable String status,@PathVariable String modificationsser) {
        System.out.println("issue_id"+issue_id+"status"+status+"modificationsser"+modificationsser);
         services.updateStatus(issue_id,status,modificationsser);
    }


    @RequestMapping(path = "/comment/addComment", method = RequestMethod.POST)
    public void add(@RequestBody CommentDTO commentDTO){

        System.out.println("Issue ID-> "+commentDTO.getIssue_id());
       Comment comment = new Comment();

        comment.setCreationdate(LocalDateTime.now());
        comment.setComment(LocalDateTime.now());


        comment.setIsuser(1);
        comment.setTypeuser("Supporter");

        comment.setDescription(commentDTO.getDescription());
        comment.setIssue_id(commentDTO.getIssue_id());
        comment.setUsercreation(commentDTO.getUsercreation());

        serviceComment.save(comment);
    }
    @RequestMapping(path = "/comment/updatecomment/{id}", method = RequestMethod.PUT)
    public void updatecomment(@RequestBody CommentDTO commentDTO, @PathVariable("id") int id){

      System.out.println("User modification:"+commentDTO.getUsercreation());
        serviceComment.updatecomment(id,commentDTO.getIssue_id(),commentDTO.getDescription(),commentDTO.getUsercreation());
    }

    @RequestMapping(path = "/comment/getCommentById/{issue_id}", method = RequestMethod.GET)
    public List<Comment> getCommentById(@PathVariable int issue_id){
        return  serviceComment.listComment(issue_id); }


}
