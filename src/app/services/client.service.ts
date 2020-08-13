import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client, ReqRespClient } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  constructor(private http: HttpClient) { }

  getClients(){
    const params = new HttpParams().set('SellerCode', '16418');
    
    return this.http.get<ReqRespClient>(environment.clientEndPoint.offline, {params: params})
    .pipe(
      map( resp => {
        return resp.Body.customer.map( client => Client.clientFromResponse(client));
      })
    );
    
  }
}
