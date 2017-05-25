import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';

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
  projectStatusForm: FormGroup;
  constructor() {
  }

  ngOnInit() {
    console.log(this.userFormData);
    this.projectStatusForm = new FormGroup({
      'projectname' : new FormControl(null, [Validators.required, this.forbiddenProjectNameValidator]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'status' : new FormControl('finished')
    });
  }

  formSubmit(formData: NgForm){
    console.log(formData);
    this.emailAddress = this.userFormData.form.value.email;
    this.passwordValue = this.userFormData.form.value.password;
    this.subscriptionValue = this.userFormData.form.value['subscription-dropdown'];
  }

  onFormSubmit(){
    console.log(this.projectStatusForm);
  }

  forbiddenProjectNameValidator(control:FormControl):{[s:string]:boolean}{
    if(control.value !== null && control.value.indexOf('test') > -1){
      return {'forbiddenName' : true };
    }
    return null;
  }
}
