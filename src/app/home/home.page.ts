import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  priority: string[] = ['Hard drive 1', 'Hard drive 2', 'USB', 'CD ROM', 'PXE'];

  constructor() {}

  ngOnInit() {
    this.priority = this.priority;
  }

  upBiosPriorityMovement(index: number) {
    let aux = this.priority[index];
    this.priority[index] = this.priority[index - 1];
    this.priority[index - 1] = aux;
    
  }

  downBiosPriorityMovement(index: number) {
    let aux = this.priority[index];
    this.priority[index] = this.priority[index + 1];
    this.priority[index + 1] = aux;
    
  }
 
}
