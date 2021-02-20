package com.example.controller;
import com.example.demo.Client;
import com.example.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping(path = "/client")
@CrossOrigin(origins = "http://localhost:4200" , allowedHeaders="*")

public class ClientController {

    @Autowired
    private ClientService service;


    @RequestMapping(path = "/clients", method = RequestMethod.GET)
    public List<Client> list(){
        return  service.listAll(); }


    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public void add(@RequestBody Client client){
          service.save(client);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id){
        service.delete(id);
    }

    @GetMapping("/clients/{id}")
    public ResponseEntity<Client> get(@PathVariable Integer id) {
        try {
            Client client = service.get(id);
            return new ResponseEntity<Client>(client, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Client>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/getIdClient/{email}")
    public int get(@PathVariable String email) {
        return service.getIdClient(email);
    }


    @RequestMapping(value = "/autentication/{email}/{password}", method = RequestMethod.GET)
    public List<Client> autentication(@PathVariable String email,@PathVariable String password) {
           return service.autentication(email,password);

    }




    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Client> update(@RequestBody Client client, @PathVariable  int id){
 try{
     Client existingClient = service.get(id);

     existingClient.setName(client.getName());
     existingClient.setFirstsurname(client.getFirstsurname());
     existingClient.setSecondsurname(client.getSecondsurname());
     existingClient.setAddress(client.getAddress());
     existingClient.setPhone(client.getPhone());
     existingClient.setSecondcontact(client.getSecondcontact());
     existingClient.setEmail(client.getEmail());
     existingClient.setPassword(client.getPassword());

     service.save(existingClient);
     return new ResponseEntity<Client>(client, HttpStatus.OK);
 }catch(NoSuchElementException e){
     return new ResponseEntity<Client>(HttpStatus.NOT_FOUND);

        }
    }
}
