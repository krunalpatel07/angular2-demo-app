import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  like: boolean = false;
  numbers: any;
  gaveRatings: boolean = false;
  ratings: number;

  constructor() {

  }

  ngOnInit() {
    this.numbers = Array.apply(null, {length: 10}).map(Number.call, Number);
  }

  handleClick() {
    this.like = !this.like;
  }

  handleStarClick(index) {
    this.ratings = index + 1;
    this.gaveRatings = true;
  }

}
