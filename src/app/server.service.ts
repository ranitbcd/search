import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { iface } from './interface';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private _http: HttpClient) { }
  // searchuser(body:any){
  //   return this._http.post('http://localhost:7071/api/apitest', body,{
  //     observe:'body'
  //   });
  // }
  getuser():Observable<iface>{
    return this._http.get<iface>('http://localhost:7071/api/demoapi');
  }


}
