import { Component } from '@angular/core';
import { MessageService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public messageService: MessageService){ };
  title = 'angular-tour-of-heroes';
}
