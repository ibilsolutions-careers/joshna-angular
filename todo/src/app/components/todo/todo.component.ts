import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITodoInterface } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   todoItemList : ITodoInterface[]=[
    {
      id:1,
      item:"item1",
      completed:false
    },
    {
      id:2,
      item:"item2",
      completed:false
    },
    {
      id:3,
      item:"item3",
      completed:false
    }
  ]

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

onSubmit(todoForm:NgForm){
  let data = {
    id:this.todoItemList.length+1,
    item: todoForm.value.data,
    completed:false
  }

  this.todoItemList.push(data);
}

deleteItem(id:number){
// api call
this.todoService.deleteTodo(id);
}
}
