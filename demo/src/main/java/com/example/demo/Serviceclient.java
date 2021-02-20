package com.example.demo;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
public class Serviceclient {

    private int serviceclient_id;
    private int service_id;
    private int client_id;
    private LocalDateTime creationdate;
    private LocalDateTime modificationdate;
    private String usercreation;
    private String modificationuser;


    public Serviceclient() { }

    public Serviceclient(int serviceclient_id, int service_id, int client_id, LocalDateTime creationdate, LocalDateTime modificationdate, String usercreation, String modificationuser) {
        this.serviceclient_id = serviceclient_id;
        this.service_id = service_id;
        this.client_id=client_id;
        this.creationdate = creationdate;
        this.modificationdate = modificationdate;
        this.usercreation = usercreation;
        this.modificationuser = modificationuser;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getServiceclient_id() {
        return serviceclient_id;
    }

    public void setServiceclient_id(int serviceclient_id) {
        this.serviceclient_id = serviceclient_id;
    }

    public int getService_id() {
        return service_id;
    }

    public void setService_id(int service_id) {
        this.service_id = service_id;
    }

    public int getClient_id() {
        return client_id;
    }

    public void setClient_id(int client_id) {
        this.client_id = client_id;
    }
    public LocalDateTime getCreationdate() {
        return creationdate;
    }

    public void setCreationdate(LocalDateTime creationdate) {
        this.creationdate = creationdate;
    }

    public LocalDateTime getModificationdate() {
        return modificationdate;
    }

    public void setModificationdate(LocalDateTime modificationdate) {
        this.modificationdate = modificationdate;
    }

    public String getUsercreation() {
        return usercreation;
    }

    public void setUsercreation(String usercreation) {
        this.usercreation = usercreation;
    }

    public String getModificationuser() {
        return modificationuser;
    }

    public void setModificationuser(String modificationuser) {
        this.modificationuser = modificationuser;
    }


}
