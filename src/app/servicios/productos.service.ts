import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  propiedad = "HOLA"
  constructor(  private http: HttpClient) { }

  obtenerProductos(){
    return this.http.get("https://fakestoreapi.com/products")
  }

}
