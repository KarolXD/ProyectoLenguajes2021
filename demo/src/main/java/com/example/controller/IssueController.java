package com.example.controller;

import com.example.demo.Issue;
import com.example.demo.IssueDTO;
import com.example.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping(path = "/issue")
@CrossOrigin(origins = "http://localhost:4200" , allowedHeaders="*")

public class IssueController {

    @Autowired
    private IssueService services;


    private ApiController api= new ApiController();



    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity<Issue> add(@RequestBody Issue issue){
        try{
        issue.setRegister(LocalDateTime.now());
        issue.setCreationdate(LocalDateTime.now());
        services.save(issue);

        Issue existingIssue= services.get(issue.getIssue_id());
        existingIssue.setReport(issue.getIssue_id());
        services.save(issue);


     api.insertissue(new IssueDTO(issue.getIssue_id(), issue.getReport(),"MEDIA",issue.getStatus(),null,"Sin resolver",null,null,issue.getUsercreation(),null,issue.getService_id()));

       return new ResponseEntity<Issue>(issue, HttpStatus.OK);
        }catch(NoSuchElementException   e){
            System.out.println("ERROR");
            return new ResponseEntity<Issue>(HttpStatus.NOT_FOUND);

        }



    }

    @RequestMapping(path = "/showissue/{client_id}", method = RequestMethod.GET)
    public List<Issue> showissue(@PathVariable int client_id) {
        return services.showissue(client_id);
    }


    @RequestMapping(path = "/showdetailsissue/{issue_id}", method = RequestMethod.GET)
    public Issue showdetailsissue(@PathVariable int issue_id) {
        return services.get(issue_id);
    }


}
