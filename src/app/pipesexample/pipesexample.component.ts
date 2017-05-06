import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesexample',
  templateUrl: './pipesexample.component.html',
  styleUrls: ['./pipesexample.component.css']
})
export class PipesexampleComponent implements OnInit {

  users: string[] = ['John','Ayan','Kelley','Peter'];

  constructor() { }

  ngOnInit() {
  }

}
