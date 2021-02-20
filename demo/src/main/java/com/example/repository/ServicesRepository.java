package com.example.repository;


import com.example.demo.Services;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServicesRepository extends JpaRepository<Services, Integer> {

    @Query(value =   "{CALL getcontractservice(:client_id) }",nativeQuery = true)
    public List<Services> getcontractservice(@Param("client_id") int client_id);


    @Query(value =   "{CALL notcontractservices(:client_id) }",nativeQuery = true)
    public List<Services> notcontractservice(@Param("client_id") int client_id);


}

