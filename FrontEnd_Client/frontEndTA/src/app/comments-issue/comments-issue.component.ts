import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RestService } from '../rest.service';
import { AppComponent } from '../app.component';
declare var jQuery: any;
@Component({
  selector: 'app-comments-issue',
  templateUrl: './comments-issue.component.html',
  styleUrls: ['./comments-issue.component.css']
})

export class CommentsIssueComponent {
  commentData: any = []; 
  element:any=[];

  commentUpdate: any=[];

 
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private rest: RestService, private router: Router,
    private app: AppComponent) {

this.commentUpdate ={
  comment_id:0,
  description:'',
  issue_id:0,
  usercreation:localStorage.getItem("token")
}

     this.commentData = this.fb.group({
      comment_id:0,
      description: ['', [Validators.required]],//ocupo
      comment: null,
      issue_id: this.route.snapshot.params['issue_id'],
      isuser: 0, //ocupo
      typeuser:'Client',
      creationdate: null,
      modificationdate: null,
      usercreation: localStorage.getItem("token"), //ocupo
      modificationuser: null
    })

    this.getComments(this.route.snapshot.params['issue_id']);



  }//fin constructor

 
  getComments(id:any){
    this.element=[];
    this.rest.getComment(id).subscribe((data:{})=>{
    this.element=data;
    })
  }


  addComent() {
    if (!this.commentData.valid) {
      return;  }
    console.log(this.commentData.value.issue_id);
    this.rest.addComment(this.commentData.value).subscribe((result) => {
      this.getComments(this.commentData.value.issue_id);
     }, (err) => { console.log(err); });
  }

goback(){
  this.router.navigate(['/details-issue/'+this.route.snapshot.params['issue_id']]);

}
  updateComent( comment_id:number,issue_id:number,description:any) {


  this.commentUpdate.description=description;
  this.commentUpdate.issue_id=issue_id;
  this.commentUpdate.comment_id=comment_id;

  this.rest.updateComment(this.commentUpdate,comment_id).subscribe((result) => { 
     this.getComments(issue_id); 
  }, (err) => { console.log(err); });
  }

  }

