import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { Client, Stomp } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private messageSubject: Subject<any> = new Subject<any>();

  constructor() {
    // Substitua a URL pelo endpoint do seu WebSocket
    let sockJS = new SockJS('http://localhost:8080/websocket-endpoint');

    sockJS.onmessage = (event: MessageEvent) => {
      this.messageSubject.next(event.data);
    };

    sockJS.onopen = () => {
      console.log('SockJS connection opened');
    };

    sockJS.onclose = () => {
      console.log('SockJS connection closed');
    };

    let stompClient = Stomp.over(sockJS);

    stompClient.connect({}, (frame: any) => {
      console.log('Connected: ' + frame);

      // Assine ao tópico desejado
      stompClient?.subscribe('/topic/notifications12356', (message) => {
        this.messageSubject.next(message.body);
      });
    }, (error: any) => {
      console.error('STOMP error', error);
    });
  }

  public getMessage(): Observable<any> {
    return this.messageSubject.asObservable();
  }
}
