import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  //DI
  constructor(private firebseService: FirebaseService) { }

  ngOnInit() {

    // emit (1,2,3,4,5)
    const source = from([1,2,3,4,5]);
    // filter out non-even numbers
    const example = source.pipe(filter(num => num % 2 === 0));
    example.subscribe(res => {
      console.log(`Even Number: ${res} `);
    });

    //1,2,3 => o/p => 2,3,4
    const obs = of(1,2,3).pipe(
      map(x => x + 1)
    ).subscribe(res => {
      console.log('Obs of', res);
      
    })
  }

  CreatePost(){
    this.firebseService.createPost().subscribe(res => {
      console.log('Firebase post', res);
    })
  }

  GetData(){
    // this.firebseService.getPostDataFirebase().subscribe(res => {
    //   console.log('Firebase get', res);
    // })
    this.firebseService.getPostDataFirebase().pipe(
      map(reaponseData => {
        console.log('Before manipulate', reaponseData);
        // empty array
        const postArray = [];
        // for in loop
        for(const key in reaponseData){
          // check the key
          if(reaponseData.hasOwnProperty(key)){
            // push new value into array
            postArray.push({...reaponseData[key], id:key})
          }
        }
        return postArray;
      })
    ).subscribe(res =>{
      console.log('After manupulate data', res);
    })
  }
}
