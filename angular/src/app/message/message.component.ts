import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../app.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: any;

  ngOnInit(): void {

  }

}
