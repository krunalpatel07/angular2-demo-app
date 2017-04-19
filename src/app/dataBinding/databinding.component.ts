import { Component } from '@angular/core';

@Component ({
  selector: 'data-binding-test',
  templateUrl: 'databinding.component.html',
  styleUrls:['databinding.component.css']
})

export class DataBindingComponent {
  username: string = '';
  usernameDisabled: boolean = true;
  usernamesCollection: string[] = [];

  onChangeText() {
    if(this.username !== ''){
      this.usernameDisabled = false;
    }
    else{
      this.usernameDisabled = true;
    }
  };
  addUsername() {
    this.usernamesCollection.push(this.username);
    this.username = '';
    this.usernameDisabled = true;
  }
}
