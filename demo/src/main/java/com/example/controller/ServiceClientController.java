package com.example.controller;


import com.example.demo.Serviceclient;
import com.example.service.ServiceClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping(path = "/serviceclient")
@CrossOrigin(origins = "http://localhost:4200" , allowedHeaders="*")

public class ServiceClientController {


    @Autowired
    private ServiceClientService services;

    @RequestMapping(path = "/serviceclients", method = RequestMethod.GET)
    public List<Serviceclient> list(){
        return  services.listAll(); }


    @RequestMapping(value = "/add/{service_id}/{client_id}/{fullname}", method = RequestMethod.POST)
    public void add(@PathVariable int service_id,@PathVariable int client_id,@PathVariable String fullname){
        Serviceclient serviceClient= new Serviceclient();
        serviceClient.setClient_id(client_id);
        serviceClient.setService_id(service_id);
        serviceClient.setCreationdate(LocalDateTime.now());
        serviceClient.setUsercreation(fullname);
        services.save(serviceClient);
    }



}