import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  signup(form: any) {
    throw new Error('Method not implemented.');
  }
  data: any;
  constructor(private _http: HttpClient) {}
  jsonuserdata(url: any): Observable<any> {
    return this._http.get(url).pipe(map((res: any) => (this.data = res)));
  }

  
}
