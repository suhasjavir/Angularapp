import { Component, OnInit } from '@angular/core';
 import { movie } from '../models/movie';
@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  title: string = "Top three bollywood movies";
  movies: movie[] = [
    {title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2009' },
    {title: 'Tumbad', director: 'Rahil', cast: 'Rahi', releaseDate: '2020' },
    {title: 'Kantara', director: 'Rishabh', cast: 'Rishabh', releaseDate: '2022' }
  ]

  weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  constructor() { }

  ngOnInit() {
  }

}
