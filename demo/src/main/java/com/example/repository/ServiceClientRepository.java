package com.example.repository;

import com.example.demo.Serviceclient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ServiceClientRepository  extends JpaRepository<Serviceclient, Integer> {

}
