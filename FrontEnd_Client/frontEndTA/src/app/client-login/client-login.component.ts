import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})

export class ClientLoginComponent implements OnInit {
  userloginForm: FormGroup;
  errorMessage: any;
  json: any = [];
  fullname: any = [];
  email: any = [];
  client_id:any=[];
  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private rest: RestService, private router: Router, private app: AppComponent) {
    this.userloginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  ngOnInit(): void { }




  // getClients(){ this.clients=[];  this.rest.getClients().subscribe((data:{})=>{ this.clients=data; }); }

  Autentication() {
    if (!this.userloginForm.valid) { return; }

    this.json;
  this.rest.autentication(this.userloginForm.value).subscribe((data: {}) => {

   
    this.json = JSON.parse(JSON.stringify(data));
    console.log(this.json);
    for (let item of this.json) {
      this.fullname = item.name + " " + item.firstsurname;
    
      this.client_id=item.clientId;
      this.email = item.email;
    }

 
      if (data == "") {
        alert("Incorrect");
        this.router.navigate(['/login']);
      } else {
        localStorage.setItem('token', this.fullname);
        localStorage.setItem('email', this.email);
        localStorage.setItem('client_id', this.client_id);
        this.app.session();
        this.router.navigate(['/home']);

      }

    });

  }


}
