import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Array<Todo> = [];

  constructor() { }

  ngOnInit() {
      // this.todos = [
      //     new Todo('Send a mail', false),
      //     new Todo('Call mom', true),
      //     new Todo('Go to gym', false),
      //     new Todo('Clean the chicken', true),
      //     new Todo('Buy a car', false)
      // ];
  }

  onModifToto(todo): void {
      console.log('TOOOOOOO', todo);
  }

  onAdd(todo): void {
      this.todos.push(todo);
  }

  onReset(): void {
      this.todos = [];
  }


}
