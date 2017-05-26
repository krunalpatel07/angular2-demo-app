import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { AppHeadersComponent } from './app-headers/app-headers.component';
import {AppRoutingModule} from "./app-routing.module";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesexampleComponent } from './pipesexample/pipesexample.component';
import {ReversePipe} from "./reverse.pipes";
import {sortingPipe} from "./sort.pipes";
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    InactiveusersComponent,
    ActiveusersComponent,
    AppHeadersComponent,
    PagenotfoundComponent,
    PipesexampleComponent,
    ReversePipe,
    sortingPipe,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataBindingModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService,CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
