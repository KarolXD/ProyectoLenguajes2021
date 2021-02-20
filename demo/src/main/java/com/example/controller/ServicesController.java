package com.example.controller;

import com.example.demo.Services;
import com.example.service.ServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/service")
@CrossOrigin(origins = "http://localhost:4200" , allowedHeaders="*")

public class ServicesController {

    @Autowired
    private ServicesService service;


    @RequestMapping(path = "/notcontractservice/{client_id}", method = RequestMethod.GET)
    public List<Services> notcontractservice(@PathVariable int client_id) {
        return service.notcontractservice(client_id);
    }

    @RequestMapping(path = "/getcontractservice/{client_id}", method = RequestMethod.GET)
    public List<Services> getcontractservice(@PathVariable int client_id) {
        return service.getcontractservice(client_id);
    }

}