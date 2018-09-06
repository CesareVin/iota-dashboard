import { Injectable } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  private url;
  private socket;
  /**
   *
   */
  constructor(private http: HttpClient) {
    // use the ip that open the browser
    // for the websocket connection on port 5000
    this.url = window.location.protocol + '//' +
      window.location.hostname + ':5000';
    this.socket = io(this.url);
  }

  sendMessage(devices) {
    this.socket.emit('devices', devices);
  }



  getDevices() {
    const observable = new Observable(observer => {
      this.socket.on('devices', (data) => {
        observer.next(data);
      });
      /*return () => {
        this.socket.disconnect();
      };*/
    });
    return observable;
  }

}
