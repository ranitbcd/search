import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private _http: HttpClient) { }
  searchuser(body:any){
    return this._http.post('http://localhost:7071/api/apitest', body,{
      observe:'body'
    });
  }

}
