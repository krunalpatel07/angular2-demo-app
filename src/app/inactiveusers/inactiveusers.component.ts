import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import {CountService} from "../services/count.service";


@Component({
  selector: 'app-inactiveusers',
  templateUrl: './inactiveusers.component.html',
  styleUrls: ['./inactiveusers.component.css']
})
export class InactiveusersComponent implements OnInit {
  inActiveUsers: string[] = this.userService.inactiveUsers;
  inactiveToActiveCount: number = 0;

  setInactiveToActiveCount(count) {
    this.inactiveToActiveCount = count;
  }


  constructor(private userService: UserService, private counter: CountService) {
    this.userService.inactiveToActiveCount.subscribe((count:number) => this.setInactiveToActiveCount(count));
  }

  ngOnInit() {
  //  this.inactiveToActiveCount = this.userService.inctiveToActiveCounter;

  }

  setActive(user:string){
    this.userService.addUserInActiveList(user);
 //   this.inactiveToActiveCount = this.userService.inctiveToActiveCounter;
 //   this.userService.inactiveToActiveCount.subscribe(count => this.setInactiveToActiveCount(count));
  }
}


/*
 import { Component, OnInit } from '@angular/core';
 import { UserService } from "../services/user.service";
 import {CountService} from "../services/count.service";


 @Component({
 selector: 'app-inactiveusers',
 templateUrl: './inactiveusers.component.html',
 styleUrls: ['./inactiveusers.component.css']
 })
 export class InactiveusersComponent implements OnInit {
 inActiveUsers: string[] = this.userService.inactiveUsers;
 inactiveToActiveCount: number = 0;

 constructor(private userService: UserService, private counter: CountService) {

 }

 ngOnInit() {

 }

 setActive(user:string){
 this.userService.addUserInActiveList(user);
 this.inactiveToActiveCount = this.counter.inctiveToActiveCounter;
 }
 }

 */
