import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}
  getAll():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>('http://localhost:3000/products')
  }
  getById(id:string|number|undefined):Observable<Iproduct>{
    return this.http.get<Iproduct>('http://localhost:3000/products/'+id)
  }
  addProduct(product:Iproduct):Observable<Iproduct>{
    return this.http.post<Iproduct>(`http://localhost:3000/products`,product)
  }
  remove(id:string|number|undefined):Observable<Iproduct>{
    return this.http.delete<Iproduct>('http://localhost:3000/products/'+id)
  }
  update(product:Iproduct,id:string|number|undefined):Observable<Iproduct>{
    return this.http.put<Iproduct>(`http://localhost:3000/products/${id}`,product)
  }
}
