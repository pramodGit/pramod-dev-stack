import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule],
  templateUrl: 'to-do.component.html',
  styleUrl: 'to-do.component.css'
})
export class ToDoComponent {
  newTodo: string = "";
  todos: string[] = [];
  addTodoList(event: any) {
    this.todos = [...this.todos, event.newTodo];
    this.newTodo = "";
  }
  updateTodoList(...params: (number | string)[]) {
    const [ind, op, t] = [...params];
    if(op === 'delete') {
      const newTodos = [...this.todos];
      newTodos.splice(Number(ind), 1);
      this.todos = [...newTodos];
    }
  }
}
