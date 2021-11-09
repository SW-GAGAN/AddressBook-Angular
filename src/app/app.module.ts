import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactsDetailsComponent } from './components/contacts-details/contacts-details.component';
import { AddingContactsFormComponent } from './components/adding-contacts-form/adding-contacts-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
>>>>>>> c70297a54ee7a657252f91b61ccbc7a8c2f8f3b5

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    ContactsDetailsComponent,
    AddingContactsFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
=======
    ContactDetailsComponent,
    AddContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
>>>>>>> c70297a54ee7a657252f91b61ccbc7a8c2f8f3b5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
