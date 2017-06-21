import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  public checkboxValue: boolean = false;
  public checkboxDisabled: boolean = false;

  @ViewChild("f1")
  public f1: NgForm;

  ngOnInit() {
    console.log(this.f1);
  }

  public toggleCheckboxValue() {
    this.checkboxValue = !this.checkboxValue;
  }

  public toggleCheckboxStatus() {
    this.checkboxDisabled = !this.checkboxDisabled;
  }

  public checkboxValueChanged(newVal: any) {
    console.log(newVal);
  }

  public resetForm() {
    this.f1.resetForm();
  }
}
