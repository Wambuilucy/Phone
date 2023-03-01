import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AllcontactComponent } from './allcontact/allcontact.component';
import { DeletecontactComponent } from './deletecontact/deletecontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { ContactServiceSpecTsComponent } from './contact.service.spec.ts/contact.service.spec.ts.component';
import { ContactServiceTsComponent } from './contact.service.ts/contact.service.ts.component';
import { ContactSpecTsComponent } from './contact.spec.ts/contact.spec.ts.component';
import { ContactTsComponent } from './contact.ts/contact.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcontactComponent,
    AllcontactComponent,
    DeletecontactComponent,
    EditcontactComponent,
    ContactServiceSpecTsComponent,
    ContactServiceTsComponent,
    ContactSpecTsComponent,
    ContactTsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
