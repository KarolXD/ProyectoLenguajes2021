import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RestService } from '../rest.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent implements OnInit {
  issueData: FormGroup;
  fullname:any=[];
  email:any=[];
  client_id:any=[];
  contractserviceControl: any=[];


  
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private rest: RestService, private router: Router, 
    private app: AppComponent) {
    this.issueData = this.fb.group({
      description: ['', [Validators.required]],//ocupo
      report: null,
      register: null,
      address: ['', [Validators.required]], //ocupo
      contactphone: new FormControl('', [//ocupo
        Validators.required,
        Validators.pattern('^[0-9]{5,8}$')
      ]),
      contactemail: new FormControl('', [//ocupo
        Validators.required,
        Validators.email
      ]),
      status: 'INGRESADO',
      supportusertassigned: null,
      client_id: null, //ocupo
      service_id: 0,
      creationdate: null,
      modificationdate: null,
      usercreation: null, //ocupo
      modificationuser: null
    })
  }//fin contrustor
  ngOnInit(): void { 
    this.app.session();
 
    this.fullname = localStorage.getItem("token"); //this.home.fullname;
    this.email = localStorage.getItem("email");//this.home.email;
    this.client_id=localStorage.getItem("client_id");//this.home.getIdClient;
    this.contractserviceControl='this.home.contractserviceControl';
  
    console.log("Fullname"+this.fullname);
    console.log("email"+this.email);
    console.log("clientid"+this.client_id);

    this.getContractServices();
  }

  addIssue() {
    if (!this.issueData.valid) {
      return; }

    this.issueData.value.client_id=this.client_id;
    this.issueData.value.usercreation=this.fullname;
    this.issueData.value.contactemail=this.email;
    this.issueData.value.report=1;
    
    console.log(this.issueData.value);
    this.rest.addIssueClient(this.issueData.value).subscribe((result) => { this.router.navigate(['issue']); }, (err) => { console.log(err); });
  }


  getContractServices(){
    this.contractserviceControl = [];
    this.rest.getContractServices(this.client_id).subscribe((data: {}) => {
   this.contractserviceControl=JSON.parse(JSON.stringify(data));
  
      
  
    });}
}
