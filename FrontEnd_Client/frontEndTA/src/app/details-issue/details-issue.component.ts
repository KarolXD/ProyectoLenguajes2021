import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
export interface issue {
  issue_id: number;
  description: string;
  report :number,
  register:Date,
  status:string,
  name:string
}
@Component({
  selector: 'app-details-issue',
  templateUrl: './details-issue.component.html',
  styleUrls: ['./details-issue.component.css']
})
export class DetailsIssueComponent implements OnInit {
  element:any=[];  
  constructor(private rest:RestService, private route: ActivatedRoute,) { }

  ngOnInit(): void {


    this.detailsIssue(this.route.snapshot.params['issue_id']);
  }



  detailsIssue(id:any){
    this.rest.detailsIssue(id).subscribe((data: issue) => {
      this.element=[];
      this.element.push(data);
      console.log("Details"+this.element.description);

    });
  }


}
