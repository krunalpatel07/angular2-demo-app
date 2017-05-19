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
  constructor() {
  }

  ngOnInit() {
    console.log(this.userFormData);
  }

  formSubmit(formData: NgForm){
    console.log(formData);
  }
}
