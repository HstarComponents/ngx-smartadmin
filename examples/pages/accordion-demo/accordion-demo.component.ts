import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accordion-demo',
  templateUrl: 'accordion-demo.component.html'
})

export class AccordionDemoComponent implements OnInit {

  public active = true;
  public active2 = true;
  public active3 = true;
  ngOnInit() { }
}
