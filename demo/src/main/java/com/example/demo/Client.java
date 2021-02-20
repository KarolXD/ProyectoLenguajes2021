package com.example.demo;

import javax.persistence.*;

@Entity
public class Client {

    private int client_id;
    private String name;
    private String firstsurname;
    private String secondsurname;
    private String address;
    private String phone;
    private String secondcontact;
    private String email;
    private String password;

    public Client(int client_id, String name, String firstsurname, String secondsurname, String address, String phone, String secondcontact, String email, String password) {
        this.client_id = client_id;
        this.name = name;
        this.firstsurname = firstsurname;
        this.secondsurname = secondsurname;
        this.address = address;
        this.phone = phone;
        this.secondcontact = secondcontact;
        this.email = email;
        this.password = password;
    }








    public Client() {
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    public int getClientId() {
        return client_id;
    }

    public void setClientId(int clientId) {
        this.client_id = clientId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFirstsurname() {
        return firstsurname;
    }

    public void setFirstsurname(String firstsurname) {
        this.firstsurname = firstsurname;
    }

    public String getSecondsurname() {
        return secondsurname;
    }

    public void setSecondsurname(String secondsurname) {
        this.secondsurname = secondsurname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSecondcontact() {
        return secondcontact;
    }

    public void setSecondcontact(String secondcontact) {
        this.secondcontact = secondcontact;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}


