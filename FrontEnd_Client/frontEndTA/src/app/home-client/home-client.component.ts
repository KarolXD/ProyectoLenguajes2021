import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RestService } from '../rest.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})




export class HomeClientComponent implements OnInit {
  fullname: any = [];
 // element: any = [];
   email: any = [];
  //jsonString: any = [];
  //toppings = new FormControl();
 // toppingList: any = [];
  //getIdClient: number = 0;
  //temp: any = [];
  elementcontractservices:any=[];
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private rest: RestService, private router: Router, private app: AppComponent) {

  }

  ngOnInit(): void {

    this.app.session();
    this.fullname = localStorage.getItem("token");
    this.email = localStorage.getItem("email");
    this.getContractServices();
  }





  //this
  getContractServices() {
  this.elementcontractservices = [];
   this.rest.getContractServices(parseInt(JSON.parse(JSON.stringify(localStorage.getItem("client_id"))))).subscribe((data: {}) => {
      this.elementcontractservices = JSON.parse(JSON.stringify(data));
    });
  }
  
}