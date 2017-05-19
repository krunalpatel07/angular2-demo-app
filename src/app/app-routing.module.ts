import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DataBindingComponent} from "./dataBinding/databinding.component";
import {GamecontrolComponent} from "./gamecontrol/gamecontrol.component";
import {ActiveusersComponent} from "./activeusers/activeusers.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {PipesexampleComponent} from "./pipesexample/pipesexample.component";
import {FormsComponent} from "./forms/forms.component";

const routes: Routes = [
  { path : '', redirectTo : '/dataBindingExample', pathMatch : 'full'},
  { path : 'dataBindingExample', component : DataBindingComponent },
  { path : 'directiveExample', component : GamecontrolComponent },
  { path : 'servicesExample', component : ActiveusersComponent },
  { path : 'pipesExample', component : PipesexampleComponent },
  { path : 'forms', component : FormsComponent },
  { path : '**', component : PagenotfoundComponent }
]

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
