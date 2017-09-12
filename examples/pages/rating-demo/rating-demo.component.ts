import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rating-demo',
  templateUrl: 'rating-demo.component.html'
})

export class RatingDemoComponent implements OnInit {

  public ratingVal = 2;
  
  ngOnInit() { }
}
