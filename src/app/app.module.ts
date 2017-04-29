import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataBindingModule } from './dataBinding/databinding.module';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { InactiveusersComponent } from './inactiveusers/inactiveusers.component';
import { ActiveusersComponent } from './activeusers/activeusers.component';
import { UserService } from "./services/user.service";
import { CountService } from "./services/count.service";

@NgModule({
  declarations: [
    AppComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    InactiveusersComponent,
    ActiveusersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataBindingModule
  ],
  providers: [UserService,CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
