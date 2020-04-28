import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { IonicSelectableModule } from 'ionic-selectable';

import { RegistrationPage } from './registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2TelInputModule,
    IonicModule,
    RegistrationPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
