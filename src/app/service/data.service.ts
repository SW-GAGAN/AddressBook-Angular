import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contacts } from '../model/contacts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private contactsSource = new BehaviorSubject(new Contacts());
  currentContact = this.contactsSource.asObservable();
  
  constructor() { }

  changeEmployee(contacts: Contacts) {
    this.contactsSource.next(contacts);
  }
}