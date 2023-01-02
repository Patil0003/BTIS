import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ApiServiceService } from '../api_service/api-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  response: any;
  
  constructor(private api_services: ApiServiceService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.api_services.getList().then((res) => {
      this.response = res;
    });
  }

 


}
