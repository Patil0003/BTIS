import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../json_service/json-service.service';
import { ApiServiceService } from '../api_service/api-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  simpleAlert() {
  }
  loginForm: any = FormGroup;
  submitted = false;
  jsondata: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private json_service: AuthServiceService,
    private api_service: ApiServiceService
  ) {}
  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.createForm();

    const url = ['./assets/Audit/Login.json'];
    const rand = url[Math.floor(Math.random() * url.length)];
    this.subscriptions.push(
      this.json_service.jsonuserdata(rand).subscribe((data) => {
        this.jsondata = data.step;
        for (let i = 0; i < this.jsondata.length; i++) {
          if (this.jsondata[i].id == 'Login') {
            for (let j = 0; j < this.jsondata[i].fieldSet.length; j++) {
              if (this.jsondata[i].fieldSet[j].id == 'suiteAdds') {
                this.jsondata[i].fieldSet[j].option = 'sunny';
              }
            }
          }
        }
      })
    );
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.api_service.login(this.loginForm.value).subscribe((response: any) => {
      if (response) {
        // console.log('login', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successful',
          timer: 1500,
        });
        this.router.navigate(['']);
      } else {
        alert("failed")
           Swal.fire({
             position: 'center',
             icon: 'error',
             title: 'Login Failed',
             timer: 1500,
           });
      }
    });
  }
}
