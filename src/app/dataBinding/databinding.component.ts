import { Component } from '@angular/core';
import {addDeclarationToModule} from "@angular/cli/lib/ast-tools";

@Component ({
  selector: 'data-binding-test',
  templateUrl: 'databinding.component.html',
  styleUrls:['databinding.component.css']
})

export class DataBindingComponent {
  username: string = '';
  usernameDisabled: boolean = true;
  usernamesCollection: string[] = [];
  displayParagraph: boolean = false;
  addDateOnClick: any[] = [];
  whiteColorText: boolean = false;

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
  };
  toggleParagraph() {
    this.displayParagraph = !this.displayParagraph;
    this.addDateOnClick.push(new Date());
    if(this.addDateOnClick.length > 4){
      this.whiteColorText = true;
    }
  }
}
