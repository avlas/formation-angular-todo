import { Todo } from '../model/Todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
    todos: Array<Todo> = [];

    constructor() {}

    addToList(todo): Array<Todo> {
        this.todos.unshift(todo);
        return this.todos;
    }

    resetList(): Array<Todo> {
      return this.todos = [];
    }

    getTodoList() : Array<Todo> {
      return this.todos;
    }
}
