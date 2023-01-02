import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  simpleAlert() {}
  User: any = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user') as any);
    this.User = user
    // console.log('User:-',this.User);
  }
  loggedin() {
    return localStorage.getItem('user');
  }
  logout() {
    localStorage.clear();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Logout Successfully',
      timer: 1500,
    });
    this.router.navigate(['/login']);
  }
}
