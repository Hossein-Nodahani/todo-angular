import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    UsersComponent,
    TodosComponent ,
    UserInformationComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule ,
    HttpClientModule ,
    RouterModule.forRoot([
      { path: 'users/:userId', component:  UserInformationComponent} ,
      { path: 'todos/:userId', component:  TodosComponent} ,
      { path: 'users', component:  UsersComponent} ,
      { path: 'todos', redirectTo : "todos/all" , pathMatch : "full"} ,
      { path: '', redirectTo : "users" , pathMatch : "full"} ,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
