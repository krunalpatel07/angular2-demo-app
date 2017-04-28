import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-inactiveusers',
  templateUrl: './inactiveusers.component.html',
  styleUrls: ['./inactiveusers.component.css']
})
export class InactiveusersComponent implements OnInit {
  inActiveUsers: string[] = this.userService.inactiveUsers;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  setActive(user:string){
    this.userService.addUserInActiveList(user);
  }
}
