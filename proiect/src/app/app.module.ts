import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './pages/form/form.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule} from '@angular/common/http';
import { EditFormComponent } from './pages/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InventoryComponent,
    FormComponent,
    EditFormComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
