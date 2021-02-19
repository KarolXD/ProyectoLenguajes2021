import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  fullname:any=[];
  title = 'frontEndTA';

  constructor(private route: ActivatedRoute,private router: Router) {
  }

   ngOnInit(){
    this.session();
}

  session() {
    this.fullname=localStorage.getItem("token");

    if (this.fullname == null  ) {
   this.router.navigate(['/login']);
      return true;
    } else {
   
      return false;}




  }
onLogout(){
  localStorage.getItem("client_id")==null;
  localStorage.getItem("email")==null;
  localStorage.removeItem("email");
  localStorage.getItem("token")==null;
  localStorage.removeItem("token");
  this.session();
  this.router.navigate(['/login']);

    }
}
