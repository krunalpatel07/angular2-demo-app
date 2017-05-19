import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  subscription: string = 'advanced';
  constructor() { }

  ngOnInit() {
  }

  formSubmit(formData: NgForm){
    console.log(formData);
  }
}
