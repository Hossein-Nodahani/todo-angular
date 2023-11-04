import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from 'src/shared/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http : HttpClient) { }

  get getUsersSubscription(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }

}
