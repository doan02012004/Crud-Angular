import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    Register(user:Iuser){
      return this.http.post<Iuser>('http://localhost:3000/signup', user)
    }
    Login(user:Iuser){
      return this.http.post<Iuser>('http://localhost:3000/signin', user)
    }
}
