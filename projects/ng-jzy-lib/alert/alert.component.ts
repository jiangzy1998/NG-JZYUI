import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jzy-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
 
  @Input()
  content!: string | null;

  constructor() { }

  ngOnInit(): void {
  }

}
