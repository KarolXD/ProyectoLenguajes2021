import {Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RestService } from '../rest.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  element: any = [];
  toppings = new FormControl();
  toppingList: any = [];
 // serviceData: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private rest: RestService, private router: Router, private app: AppComponent) {
   // this.serviceData = this.fb.group({  service_id: ['', [Validators.required]],  name: '' });
  }

  @Input() serviceData: any = { service_id: 0, name: '' };


 

  ngOnInit(): void {
    this.notcontractservice();
  }



notcontractservice() {
     this.element = [];
     this.rest.notcontractservice(parseInt(JSON.parse(JSON.stringify(localStorage.getItem("client_id"))))).subscribe((data: {}) => {
     this.toppingList = JSON.parse(JSON.stringify(data));

    });
  }
  addServiceClient() {
if(this.serviceData.service_id==0){
  alert("Must select one service at least.");
}else{

    for (let item of this.serviceData.service_id) {
      console.log("from ts" + item);
      this.rest.addServiceClient(item, JSON.parse(JSON.stringify(localStorage.getItem("client_id"))), JSON.stringify(localStorage.getItem("client_id"))).subscribe((result) => { this.router.navigate(['/home']); }, (err) => { console.log(err); });
    }
  }

  }
}
