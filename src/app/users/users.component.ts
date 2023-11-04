import { Component , OnInit } from '@angular/core';

import { User } from 'src/shared/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{

  // users : User[] | undefined
  users : any
  isLoading : boolean = true
  isFailToLoad : boolean = false

  constructor(private usersService : UsersService ){
  }
 
  ngOnInit(): void {
    this.usersService.getUsersSubscription.subscribe({
      next : (usersResponse) => {
        this.users = usersResponse
        this.isLoading = false
      } ,
      error : () => this.isFailToLoad = true
    })
  }

}
