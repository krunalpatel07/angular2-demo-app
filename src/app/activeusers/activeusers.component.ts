import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-activeusers',
  templateUrl: './activeusers.component.html',
  styleUrls: ['./activeusers.component.css']
})
export class ActiveusersComponent implements OnInit {

  activeUsers: string[] = this.userService.activeUsers;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  setInactive(user:string){
    this.userService.addUserInInactiveList(user);
  }
}
