
import { RestService } from '../rest.service';
import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lista-issue',
  templateUrl: './lista-issue.component.html',
  styleUrls: ['./lista-issue.component.css']
})



export class ListaIssueComponent  implements AfterViewInit {
  element: any=[]; client_id:number=0;
  constructor(public rest: RestService,  private route: ActivatedRoute,   private router: Router){}
  
 

  displayedColumns: string[] = ['issue_id', 'name', 'register', 'status','Editar'];
  dataSource = new MatTableDataSource<any>();
 

 ngAfterViewInit() {
  this.listaIssue();
}


listaIssue(){
    this.element=[];
    this.client_id= parseInt(JSON.parse(JSON.stringify(localStorage.getItem("client_id"))));
    this.rest.listaIssue(this.client_id).subscribe((data:{})=>{
    this.element=data;

    this.dataSource.data=(this.element)
    console.log(this.element);

    });
  }


}




