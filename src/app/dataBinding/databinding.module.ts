import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './databinding.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports:[FormsModule,CommonModule],
  declarations:[DataBindingComponent],
  providers: [],
  exports: [DataBindingComponent]
})

export class DataBindingModule { }
