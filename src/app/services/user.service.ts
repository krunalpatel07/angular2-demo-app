import {Injectable, EventEmitter} from "@angular/core";
import {CountService} from "./count.service";

@Injectable()
export class UserService {
  activeUsers: string[] = ['Max', 'Joe','Peter'];
  inactiveUsers: string[] = ['Chris', 'Manu','Kelley'];
  inctiveToActiveCounter: number = 0;
  activeToInctiveCounter: number = 0;

  // activeToInactiveCount: EventEmitter<number> = new EventEmitter<number>();
  // inactiveToActiveCount: EventEmitter<number> = new EventEmitter<number>();

  constructor(private counter: CountService){

  }

  addUserInActiveList(user:string){
    this.activeUsers.push(user);
    this.inactiveUsers.splice(this.inactiveUsers.indexOf(user),1);
    this.inctiveToActiveCounter += 1;
//    this.inactiveToActiveCount.emit(this.counter.inctiveToActiveCounter);
  }

  addUserInInactiveList(user:string){
    this.inactiveUsers.push(user);
    this.activeUsers.splice(this.activeUsers.indexOf(user),1);
    this.activeToInctiveCounter += 1;
 //   this.activeToInactiveCount.emit(this.counter.activeToInctiveCounter);
  }
}
