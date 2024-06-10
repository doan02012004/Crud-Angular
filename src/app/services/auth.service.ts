import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  signup(product:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>('http://localhost:3000/signup', product)
  }
  signin(product:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>('http://localhost:3000/signin', product)
  }
}
