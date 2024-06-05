import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) {}
  login(user:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(`http://localhost:3000/signin`,user)
  }
  register(user:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(`http://localhost:3000/signup`,user)
  }
}
