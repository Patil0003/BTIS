import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private authURL = 'http://localhost:5555';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'authoriztion',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  // register
  signup(data: any) {
    return this.httpClient.post(`${this.authURL}/user-gateway/signup`, data);
  }
  // localstorage
  loggedin() {
    return !!localStorage.getItem('user');
  }
  // login
  login(data: any) {
    return this.httpClient.post(`${this.authURL}/user-gateway/login`, data);
  }
  // getallData
  async getList(): Promise<any> {
    const data: any = await this.httpClient
      .get(`${this.authURL}/sub-gateway/get-list`)
      .toPromise();
    // console.log(data);
    if (data) {
      return data?.data.result;
    } else {
      return false;
    }
  }
 


}
