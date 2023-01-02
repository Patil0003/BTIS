import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../json_service/json-service.service';
import { ApiServiceService } from '../api_service/api-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm: any = FormGroup;
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

    const url = ['./assets/Audit/Registration.json'];
    const rand = url[Math.floor(Math.random() * url.length)];
    this.subscriptions.push(
      this.json_service.jsonuserdata(rand).subscribe((data) => {
        this.jsondata = data.step;
        for (let i = 0; i < this.jsondata.length; i++) {
          if (this.jsondata[i].id == 'Registration') {
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
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      phones: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.signupForm.controls;
  }
  signup() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    this.api_service
      .signup(this.signupForm.value)
      .subscribe((response: any) => {
        if (response.data) {
          this.router.navigate(['/login']);
        }
      });
  }
}
