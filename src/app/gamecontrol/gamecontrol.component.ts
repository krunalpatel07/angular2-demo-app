import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() incrementNum: EventEmitter<number> = new EventEmitter<number>();
  count: number = 0;
  timeoutRef: any;
  countNumber: number = 0;

  incrementNumber(){
    var _this = this;
    this.timeoutRef = setInterval(function() {
      _this.count = _this.count + 1;
      _this.incrementNum.emit(_this.count);
    },1000);
  }

  stopIncrementNumber(){
    clearInterval(this.timeoutRef);
  }

  constructor() { }

  ngOnInit() {
  }

}
