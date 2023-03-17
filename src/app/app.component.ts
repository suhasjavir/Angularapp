import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  parentToChild: string = `I am coming from parent(@input decorator "parent to child")`;
  posts = [
    {
      title: 'Pam Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ]
  title = 'angularapp';
  name = 'Suhas';
  text = 'This is Angular Component'
  empCount;
  data = {
    name: 'CodeMind',
    dept: 'IT'
  }
  imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  
  // products = {};
    constructor(){
    //this.tital = 200;
    this.getValueFromServer();
  }
  ngOnInit(): void {
      
    //  this.products = this.myservice.products; 
  }
  getValueFromServer(){
    this.empCount = 100000;
  }
  currentTime() : any{
    let date = new Date();
    return date;
  }

  onParent(val){
    console.log(`from child to parent: "${val}"`);
  }

  objOnParent(objVal: Employee){
    console.log(`from child to parent emp: "${objVal}"`);
  }
}
