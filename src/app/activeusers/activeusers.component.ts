import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {CountService} from "../services/count.service";

@Component({
  selector: 'app-activeusers',
  templateUrl: './activeusers.component.html',
  styleUrls: ['./activeusers.component.css']
})
export class ActiveusersComponent implements OnInit {

  activeUsers: string[] = this.userService.activeUsers;
  activeToInactiveCount: number = 0;

  constructor(private userService: UserService, private counter: CountService) { }

  ngOnInit() {

  }

  setInactive(user:string){
    this.userService.addUserInInactiveList(user);
    this.activeToInactiveCount = this.userService.activeToInctiveCounter;
  }
}
