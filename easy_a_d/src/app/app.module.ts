//angular
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgSelectModule } from '@ng-select/ng-select';
// components
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component'; 
import { LoginComponent } from './login/login.component';

// 3rd party
  //firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
  //rxjs
import { Observable } from 'rxjs';
  //ngx
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { ModalModule } from 'ngx-bootstrap/modal'
import { TypeaheadModule } from 'ngx-bootstrap/typeahead'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { PopoverModule } from 'ngx-bootstrap/popover'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
   // NgSelectModule,
    BsDropdownModule.forRoot(),
   // BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
