import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/shared/user';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})

export class UserInformationComponent {

  user : any

  isLoadingUsers : boolean = true
  isFailtoLoad : boolean = false

  constructor(private route : ActivatedRoute , private http : HttpClient){
  }

  ngOnInit(){
    const userId = this.route.snapshot.paramMap.get("userId")
    const Url = `https://jsonplaceholder.typicode.com/users/${userId}`

    this.http.get(Url).subscribe({
      next : (userResponse) => {
        this.user = userResponse
        this.isLoadingUsers = false
      },
      error : () => this.isFailtoLoad = true 
    })

  }

}
