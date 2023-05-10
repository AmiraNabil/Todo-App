import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{
  todos: Todo[];
  inputTodo: string = "";
  show:boolean = false
  constructor(){
    this.todos = [
      {content: 'Go to the Park', done: false},
      {content: 'Cook Lunch', done: false}
    ]
  }

  done(id:number){
    this.todos.map((value, i)=>{
      if (i == id) value.done = !value.done
      return value
    })
  }

  deleteTodo(id:number)
  {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  
  onShow()
  {
    this.show = !this.show
  }

  addTodo()
  {
    this.todos.push({
      content: this.inputTodo,
      done: false
    })

    this.inputTodo = "";
  }
}
