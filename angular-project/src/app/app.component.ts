import { Component } from '@angular/core';
import { WebSocketService } from 'src/common/websocket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  constructor(private webSocketService: WebSocketService) {

  }

  ngOnInit() {
    this.webSocketService.getMessage().subscribe((message) => {
      console.log('Received message:', message);
    });
  }

}
