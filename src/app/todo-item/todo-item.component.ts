import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TodoItem} from '../interface/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() removeTodoItem: EventEmitter<TodoItem> = new EventEmitter();
  @Output() updateTodoItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(): void {
    this.removeTodoItem.emit(this.item);
  }

  completeItem(): void {
    this.updateTodoItem.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

}
