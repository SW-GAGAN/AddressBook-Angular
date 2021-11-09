import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/model/contacts';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})
export class ContactsDetailsComponent implements OnInit {

  public contactDetails: Contacts[] =[];
  router: any;

  constructor(
    private httpService: HttpService ){

    }
  
  ngOnInit(): void {
    this.httpService.getContactsData().subscribe(responce => {
      this.contactDetails = responce;
      console.log(this.contactDetails);
    });
   }
}
