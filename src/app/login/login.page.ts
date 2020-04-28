// import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

import { stringify } from 'querystring';


// @NgModule({
//   imports: [
//     FormGroup,
//   ],
// })
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  buttonDisabled = false;

  constructor(public formBuilder: FormBuilder, public api: ApiService, public loadingController: LoadingController, public router: Router) { }
  
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]], 
    })
  }


  get errorControl() {
    return this.ionicForm.controls;
  }

  async submitForm() {
    var data = stringify({
      "username": this.ionicForm.value.username,
      "password": this.ionicForm.value.password
    })
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please fulfill all the required values!')
      return false;
    } else {
      this.api
        .checkLogin(data)
        .subscribe(
          (data) => {
            console.log(data['_body']);
            this.router.navigate(['/dashboard']);
          }, error => {
            console.log(error);
          }
        )
      const toast = await this.loadingController.create({
        message: 'Proccess Login.',
        duration: 2000,
        keyboardClose: true,
      });
      toast.present();
      console.log(this.ionicForm.value)
    }
  }
}

