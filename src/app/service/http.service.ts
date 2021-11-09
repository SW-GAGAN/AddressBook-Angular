import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getContactsData() {
    throw new Error('Method not implemented.');
  }
  
  constructor(private httpClient: HttpClient) {

}
getcontactData(): Observable<any> {
  return this.httpClient.get(environment.contactDetails);
}

}
