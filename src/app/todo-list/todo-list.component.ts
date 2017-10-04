import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoService } from '../services/TodoService';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [ TodoService ]
})
export class TodoListComponent implements OnInit {

  todos: Array<Todo> = [];

  constructor( private todoService: TodoService ) {
      // this.todoService = new TodoService(this.todos);
  }

  ngOnInit() {
      this.todos = this.todoService.getTodoList();
      // this.todos = [
      //     new Todo('Send a mail', false),
      //     new Todo('Call mom', true),
      //     new Todo('Go to gym', false),
      //     new Todo('Clean the chicken', true),
      //     new Todo('Buy a car', false)
      // ];
  }

  onModifToto(todo): void {
      console.log('todo : ', todo.toString());
  }

  onAdd(todo): void {
      this.todos = this.todoService.addToList(todo);
  }

  onReset(): void {
      this.todos = this.todoService.resetList();
  }
}
