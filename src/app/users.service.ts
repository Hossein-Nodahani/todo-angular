import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/shared/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : any = []

  constructor(private http : HttpClient) { }

  get getUsersSubscription(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  // setUsers(users : any){
  //   this.users = users
  // }

  // addUser(user : User){
  //   this.users.push(user)
  // }

  // clearUsers(){
  //   this.users = []
  //   return this.users
  // }

}
