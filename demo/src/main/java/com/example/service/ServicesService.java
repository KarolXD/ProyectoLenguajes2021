package com.example.service;

import com.example.demo.Services;
import com.example.repository.ServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ServicesService {


    @Autowired
    private ServicesRepository repo;

    public List<Services> notcontractservice(int client_id){
        return  repo.notcontractservice(client_id);
    }

    public List<Services> getcontractservice(int client_id){
        return  repo.getcontractservice(client_id);
    }





}
