import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: any =[];
  //DI
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.listToDos();
  }

  createTodo(){
    let todo = {
      id: new Date().getTime(),
      title: 'format the data of firebase'
    }

    this.todoService.create(todo).subscribe((response) => {
      console.log('to create', response);
      this.listToDos();
    }, (error => {
      console.log(error);
    }))
  }

  listToDos(){
    this.todoService.list().subscribe((res) => {
      console.log(res);
      this.todoList = res;
    }, (error => {
      console.log(error);
    }))
  }
}