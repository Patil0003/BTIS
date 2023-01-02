import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router,CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  simpleAlert() {}
  constructor(private api_service: ApiServiceService, private router: Router) {}

  canActivate() {
    if (this.api_service.loggedin()) {
      return true;
    }
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'You Need to Login First!',
      // timer: 1500,
    });
    this.router.navigate(['/login']);
    return false;
  }
}
