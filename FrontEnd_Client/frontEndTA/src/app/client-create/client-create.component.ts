import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  clientData: FormGroup;
  errorMessage: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private rest: RestService, private router: Router) {

 this.clientData = this.fb.group({
      name: ['', [Validators.required]],
      firstsurname: ['', [Validators.required]],
      secondsurname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      secondcontact: ['', [Validators.required]],
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{5,8}$')
      ])
    })

  }


  ngOnInit(): void {
  }


  addClient() {

    if (!this.clientData.valid) {
      return;}

    console.log(this.clientData.value);
    this.rest.addClient(this.clientData.value).subscribe((result) => { this.router.navigate(['/login']);
     console.log(this.clientData); }, (err) => {
     console.log(err);
    });

  }//fin add

}
