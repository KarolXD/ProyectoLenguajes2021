package com.example.service;

import com.example.demo.Issue;
import com.example.demo.IssueClientDTO;
import com.example.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
@Transactional
public class IssueService {


    @Autowired
    private IssueRepository repository;


    public void save(Issue issue) { repository.save(issue); }

    public Issue get (int id){ return repository.findById(id).get(); }

    //public Issue findByIssue (int id){ return repository.findByIssue(id); }


    public List<Issue> showissue(int client_id) {
        return repository.showissue(client_id);
    }

    public List<IssueClientDTO> getJoinInformation(int issue_id) {
        return repository.getJoinInformation(issue_id);
    }

    public void updateStatus(int issue_id, String status, String modificationuser) {
        repository.updateStatus(issue_id,status,modificationuser); }




}
