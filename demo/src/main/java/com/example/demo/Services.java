package com.example.demo;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity

public class Services {

    private int service_id;
    private String name;



    private LocalDateTime creationdate;

    public Services() { }
    public Services(int service_id, String name, LocalDateTime creationdate) {
        this.service_id = service_id;
        this.name = name;
        this.creationdate=creationdate;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getService_id() {
        return service_id;
    }

    public void setService_id(int service_id) {
        this.service_id = service_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getCreationdate() {
        return creationdate;
    }

    public void setCreationdate(LocalDateTime creationdate) {
        this.creationdate = creationdate;
    }


}
