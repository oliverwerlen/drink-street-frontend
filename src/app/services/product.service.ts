import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = environment.url + "/products"
  constructor(private httpClient: HttpClient) {
  }

  public getAllProducts() : Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl)
  }
}
