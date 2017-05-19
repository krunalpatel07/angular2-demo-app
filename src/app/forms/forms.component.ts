import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  subscription: string = 'advanced';
  @ViewChild('userForm')userFormData;
  emailAddress: string;
  passwordValue: string;
  subscriptionValue: string;
  constructor() {
  }

  ngOnInit() {
    console.log(this.userFormData);
  }

  formSubmit(formData: NgForm){
    console.log(formData);
    this.emailAddress = this.userFormData.form.value.email;
    this.passwordValue = this.userFormData.form.value.password;
    this.subscriptionValue = this.userFormData.form.value['subscription-dropdown'];
  }
}
