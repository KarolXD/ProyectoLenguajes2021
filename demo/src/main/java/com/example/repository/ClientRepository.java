package com.example.repository;

import com.example.demo.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository  extends JpaRepository<Client, Integer> {
    List<Client> findByEmailAndPassword(String email, String password);

     Client findByEmail(String email);


}
