import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Todo } from 'src/shared/todo';
import { TodosService } from '../todos.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit{

    todos :any = []
    userId : any
    isLoading  :boolean= true
    isFailToLoad :boolean = false

    constructor(private todosService : TodosService , private route : ActivatedRoute){
    }

    get getVisibleTodos(){
      if(this.userId === "all"){
        return this.todos
      }else{
        return this.todos.filter((item:any) => item.userId === Number(this.userId))
      }
    }

    ngOnInit(): void {
      this.userId = this.route.snapshot.paramMap.get("userId")      
      const TodosSubscription = this.todosService.getUsersSubscription
      TodosSubscription.subscribe({
        next: (todosResponse) => {
          this.todos = todosResponse
          this.isLoading = false
        },
        error : () => this.isFailToLoad = true
      })
    }

}
