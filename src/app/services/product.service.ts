import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAll():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>('http://localhost:3000/products')
  }
  add(product:Iproduct):Observable<Iproduct>{
    return this.http.post<Iproduct>('http://localhost:3000/products', product)
  }
  update(product:Iproduct, id:number|string|undefined):Observable<Iproduct>{
    return this.http.put<Iproduct>(`http://localhost:3000/products/${id}`,product)
  }
  remove(id:number|string|undefined):Observable<Iproduct>{
    return this.http.delete<Iproduct>(`http://localhost:3000/products/${id}`)
  }
  getById(id:number|string|undefined):Observable<Iproduct>{
    return this.http.get<Iproduct>(`http://localhost:3000/products/${id}`)
  }
}
