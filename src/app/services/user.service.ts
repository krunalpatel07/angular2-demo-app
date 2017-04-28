export class UserService {
  activeUsers: string[] = ['Max', 'Joe','Peter'];
  inactiveUsers: string[] = ['Chris', 'Manu','Kelley'];

  addUserInActiveList(user:string){
    this.activeUsers.push(user);
    this.inactiveUsers.splice(this.inactiveUsers.indexOf(user),1);
  }

  addUserInInactiveList(user:string){
    this.inactiveUsers.push(user);
    this.activeUsers.splice(this.activeUsers.indexOf(user),1);
  }
}
