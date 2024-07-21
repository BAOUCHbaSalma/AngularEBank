import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';  
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
    token: string | null = null;

    constructor(private srv: ServiceService) {
      if (typeof localStorage !== 'undefined') {
        this.token = localStorage.getItem('jwt');
      }
    }

  decodeToken(token: string ) {
    return jwtDecode(token);
  }

  getUsernameFromToken(token: any) :any{
    const decodedToken = this.decodeToken(token);
    return decodedToken.sub;
  }

  getIdByUsername(token:any) {
      const username = this.getUsernameFromToken(token);
      return this.srv.findIdByUsername(username);
    }
  

}
