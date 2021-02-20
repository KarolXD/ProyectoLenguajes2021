package com.example.service;

import com.example.demo.Comment;
import com.example.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CommentService {

    @Autowired
    private CommentRepository repo;

    public List<Comment> listComment(int issue_id){
        return repo.listComment(issue_id);
    }


    public void save(Comment comment){
        repo.save(comment);
    }

    public void updatecomment(int comment_id,int issue_id, String description, String mod){
        repo.update(comment_id,issue_id, description,mod);
    }

    public Comment get(int id) {
       return repo.findById(id).get();
    }


}
