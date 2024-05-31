import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    constructor(private http:HttpClient){
    }
    getAll():Observable<Iproduct[]>{
      return this.http.get<Iproduct[]>('http://localhost:3000/products')
    }
    addProduct(product:Iproduct):Observable<Iproduct>{
      return this.http.post<Iproduct>('http://localhost:3000/products',product)
    }
    deleteProduct(id:number|string|undefined):Observable<Iproduct>{
      return this.http.delete<Iproduct>(`http://localhost:3000/products/${id}`)
    }

    getById(id:number|string|undefined){
      return this.http.get<Iproduct>('http://localhost:3000/products/'+id)
    }

    updateProduct(product:Iproduct, id:number|string|undefined){
      return this.http.put<Iproduct>(`http://localhost:3000/products/${id}`,product)
    }
}
