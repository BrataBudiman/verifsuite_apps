import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/User';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_path = "http://103.129.105.139/verifsuite_server/api"
  // base_path = "http://localhost/ttlock/api"

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      // 'Access-Control-Allow-Credentials': 'true',
      // 'Access-Control-Allow-Origin': origin,
      // 'Access-Control-Allow-Methods':' GET, POST, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  //registration user
  public postUser(data: any): Observable<any> {
    const url = `${this.base_path}/users/store`;
    return this.http.post(url, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  public checkLogin(data: any): Observable<any> {
    const url = `${this.base_path}/users/check_login`;
    return this.http.post(url, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // public registration(user: User): Observable<User> {

  //   return this.http

  //     .post(this.base_path + '/users/store_post', user)

  //     .map(response => {

  //       return new User(response);

  //     })

  //     .catch((error) => {

  //       console.error(error);

  //     });

  // }
}
