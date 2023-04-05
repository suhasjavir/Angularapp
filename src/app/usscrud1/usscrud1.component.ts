import { Component, OnInit } from '@angular/core';
import { Usscrud1Service } from '../services/usscrud1.service';

@Component({
  selector: 'app-usscrud1',
  templateUrl: './usscrud1.component.html',
  styleUrls: ['./usscrud1.component.css']
})
export class Usscrud1Component implements OnInit {

  constructor(private usscrud1: Usscrud1Service) { }

  fetching = false;
  dataTitle = 'CodeMind Technology';
  products = [
    // {id: 'p1', name: 'Laptop', price: 45000},
    // {id: 'p2', name: 'Mobile', price: 17500},
    // {id: 'p3', name: 'Watch', price: 12000},
    // {id: 'p4', name: 'Fridge', price: 32000}
  ]

  onAddProduct(id, name, price){
    this.products.push({
      id: id.value,
      name: name.value,
      price: price.value
    })
  }

  onSaveProduct(){
    this.usscrud1.saveProducts(this.products).subscribe(
      (res) => console.log(res), 
      (error => console.log(error))
      )}

      onFetchProduct(){
        this.fetching = true;
        this.usscrud1.fetchProducts().subscribe(
          (res) => {
            // console.log(res),
            const data = JSON.stringify(res)
            console.log(data);
            this.products = JSON.parse(data)
            this.fetching = false;
          },
          (err => console.log(err))
          )}

  onDeleteProduct(id){
    if(confirm('Do you want to delete this product')){
      this.products.splice(id, 1);
    }
  }
  ngOnInit() { 
    this.onFetchProduct();
  }

}
