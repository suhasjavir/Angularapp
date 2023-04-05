import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Usscrud1Service {

  productsURL='https://usscrud-default-rtdb.firebaseio.com/product.json';
   
  private headers = new HttpHeaders({'Content-type' : 'application/json'})

  constructor(private httpClient: HttpClient) { }

  saveProducts(product: any[]){
    // return this.httpClient.post(this.productsURL, product)
    return this.httpClient.put(this.productsURL, product, { headers: this.headers})    
  }

  fetchProducts(){
    return this.httpClient.get(this.productsURL)
  }

  // getDataTitle(){
  //   return this.httpClient.get('https://usscrud-default-rtdb.firebaseio.com/dataTitle.json');
  // }
}
