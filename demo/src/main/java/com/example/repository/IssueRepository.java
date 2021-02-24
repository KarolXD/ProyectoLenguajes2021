package com.example.repository;

import com.example.demo.Issue;
import com.example.demo.IssueClientDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IssueRepository  extends JpaRepository<Issue, Integer> {

    @Query(value = "{CALL ShowIssue(:client_id) }", nativeQuery = true)
    public List<Issue> showissue(@Param("client_id") int client_id);



    //public Issue findByIssue(int issue_id);


    @Query(value="select   new com.example.demo.IssueClientDTO(i.issue_id,i.report, c.name,c.firstsurname,c.secondsurname,c.email,c.phone, c.address, c.secondcontact,i.status,i.contactemail,i.contactphone,i.name)  FROM Client c JOIN Issue  i on i.client_id=c.clientId where i.issue_id=:issue_id")

//@Query(value="select   new com.example.demo.IssueClientDTO(i.issue_id,i.report, c.name,c.firstsurname,c.secondcontact,c.email,c.phone, c.address, c.secondcontact,i.status,i.contactemail,i.contactphone)  FROM Client c JOIN Issue  i on i.client_id=c.clientId")
    public List<IssueClientDTO> getJoinInformation(@Param("issue_id") int issue_id);


    @Query(value="{CALL SP_UpdateStatusIssue(:issue_id, :status,:modificationsser)}" , nativeQuery = true)
    public void updateStatus(@Param("issue_id") int issue_id, @Param("status") String status, @Param("modificationsser") String modificationsser);




}