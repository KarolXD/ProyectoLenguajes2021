package com.example.service;

import com.example.demo.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.repository.ClientRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ClientService {

    @Autowired
    private  ClientRepository repository;

    public List<Client> listAll(){
        return  repository.findAll();
    }

    public void save(Client client) { repository.save(client);
    }
    public void delete(int id){
        repository.deleteById(id);
    }

    public Client get (int id){
      return repository.findById(id).get();
    }
    public int getIdClient (String email){
        Client client =repository.findByEmail(email);
      return client.getClientId();
    }


    public List<Client>  autentication (String email, String password){
        return repository.findByEmailAndPassword(email,password);
    }


}
