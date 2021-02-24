import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint:string = 'http://localhost:8080/client/';

const endpointservice:string = 'http://localhost:8080/service/';

const endpointissue:string = 'http://localhost:8080/issue/';

const endpointserviceclient:string = 'http://localhost:8080/serviceclient/';


const endpointcomment:string = 'http://localhost:8080/comment/';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
   //  'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  })
};


@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) {}


  addClient (client: any): Observable<any> {
    console.log(endpoint + 'add/', JSON.stringify(client));
    return this.http.post<any>(endpoint + 'add/', JSON.stringify(client), httpOptions).pipe(
      tap((client) => console.log('added clients')),
      catchError(this.handleError<any>('addClient'))
    );
  }

  addServiceClient (service_id: number, client_id :number, fullname:string): Observable<any> {
    return this.http.post<any>(endpointserviceclient + 'add/'+service_id+"/"+client_id+"/"+fullname, httpOptions).pipe(
      tap((client) => console.log('added addServiceClient')),
      catchError(this.handleError<any>('addServiceClient'))
    );
  }
  
  autentication (client: any): Observable<any> {
   // console.log(endpoint + 'autentication/'+client.email+"/"+client.password);
    return this.http.get<any>(endpoint + 'autentication/'+client.email+"/"+client.password).pipe(
      catchError(this.handleError<any>('autentication'))
    );
  }

  

  getIdClientByEmail(email: string): Observable<any> {
    return this.http.get<any>(endpoint + 'getIdClient/'+email)
      .pipe(
        catchError(this.handleError<any>('getIdClientByEmail'))
      );
  }
  getContractServices(client_id:number): Observable<any> {
    console.log(endpointservice+"getcontractservice/"+client_id);
    return this.http.get<any>(endpointservice + 'getcontractservice/'+client_id)
      .pipe(
        catchError(this.handleError<any>('getContractServices'))
      );
  }

  notcontractservice(client_id:number): Observable<any> {
    console.log(endpointservice+"notcontractservice/"+client_id);
    return this.http.get<any>(endpointservice + 'notcontractservice/'+client_id)
      .pipe(
        catchError(this.handleError<any>('notcontractservice'))
      );
  }

  

  addIssueClient (issue:any): Observable<any> {
return this.http.post(endpointissue+'add/', {
  description: issue.description,
  report: issue.report,
  address: issue.address,
  contactphone:issue.contactphone,
  contactemail:issue.contactemail,
  client_id:issue.client_id,
  service_id:issue.service_id,
  status:issue.status,
  usercreation:issue.usercreation,
  name:issue.name

}).pipe( 
   tap((issue) =>   alert("Registeed")   ),
catchError(this.handleError<any>('addIssueClient'))
);
  }

  
listaIssue(client_id: number): Observable<any> {
  return this.http.get<any>(endpointissue + 'showissue/'+client_id)
    .pipe(
      catchError(this.handleError<any>('listaIssue'))
    );
}


  
detailsIssue(issue_id: number): Observable<any> {
  return this.http.get<any>(endpointissue + 'showdetailsissue/'+issue_id)
    .pipe(
      catchError(this.handleError<any>('detailsIssue'))
    );
}

addComment (comment: any): Observable<any> {
  console.log(endpointcomment + 'add/', JSON.stringify(comment));
  return this.http.post<any>(endpointcomment + 'add/', JSON.stringify(comment), httpOptions).pipe(
    tap((client) =>  this.getComment(comment.issue_id)
 
     ),
    catchError(this.handleError<any>('addComment'))
  );
}

updateComment (comment: any, id:number): Observable<any> {
  console.log(endpointcomment + 'update/'+id, JSON.stringify(comment));

  return this.http.put<any>(endpointcomment + 'update/'+id, JSON.stringify(comment), httpOptions).pipe(
    tap((client) =>  this.getComment(comment.issue_id)
 
     ),
    catchError(this.handleError<any>('updateComment'))
  );
}


getComment(issue_id: number): Observable<any> {
  return this.http.get<any>(endpointcomment + 'comments/'+issue_id)
    .pipe(
      catchError(this.handleError<any>('getComment'))
    );
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

