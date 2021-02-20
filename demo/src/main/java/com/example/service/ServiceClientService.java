package com.example.service;

import com.example.demo.Serviceclient;
import com.example.repository.ServiceClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public class ServiceClientService {

    @Autowired
    private ServiceClientRepository repository;

    public List<Serviceclient> listAll(){
        return  repository.findAll();
    }

    public void save(Serviceclient serviceClient) {
        repository.save(serviceClient);
    }


}
