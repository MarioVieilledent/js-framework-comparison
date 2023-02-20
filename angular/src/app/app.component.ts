import { Component } from '@angular/core';
import { OnChange } from 'property-watch-decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "Angular app";
  LS: string = "jsFrameworkComparison-angular-messages";

  @OnChange((value, _) => console.log('new value for count: ' + value))
  count: number = 0;

  list: Message[] = [];

  ngOnInit() {
    setInterval(() => {
      this.count++;
      console.log
    }, 1000);

    this.list = JSON.parse(window.localStorage.getItem(this.LS) ?? "[]") as Message[];
  }

  sendMessage(event: any) {
    this.list.push({ message: event.target.value, date: new Date() });
    window.localStorage.setItem(this.LS, JSON.stringify(this.list));
  }

  emptyList() {
    this.list = [];
    window.localStorage.setItem(this.LS, "[]");
  }
}


export type Message = {
  message: string;
  date: Date;
};