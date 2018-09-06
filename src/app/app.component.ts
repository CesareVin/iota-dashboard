import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './app.service';

import * as Mam from 'mam.client.js';
import * as IOTA from 'iota.lib.js';

// declare var iota: any;
// declare var mam: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'IoTa Dashboard';
  devices = [];
  private _deviceConnectionHandle;
  root;
  iota;
  seed;
  constructor(private dataService: DataService) {
    this.iota = new IOTA({ provider: 'https://nodes.testnet.iota.org:443' });
    this.seed = this.createSeed();
    const mamState = Mam.init(this.iota, this.seed);
    this.root = Mam.getRoot(mamState);
  }

  async ngOnInit() {
    this._deviceConnectionHandle = this.dataService
      .getDevices()
      .subscribe(async (RemoteDevices: any) => {
        const internalDevices = [];
        for (let k = 0; k < RemoteDevices.length; k++) {
          const device = RemoteDevices[k];
          let exist = false;
          for (let j = 0; j < this.devices.length; j++) {
            if (this.devices[j].root === device.root) {
              exist = true;
            }
          }
          if (!exist) {
            device['messages'] = [];
            internalDevices.push(device);
            this.fetchData(device.root, device);
          }
          // this.devices.push(device);
        }
        if (internalDevices.length > 0) {
          internalDevices.concat(this.devices);
          this.devices = internalDevices;
        }
      });

    this.dataService.sendMessage([{name: 'Dashboard', root: this.seed}]);
  }

  ngOnDestroy() {
    this._deviceConnectionHandle.unsubscribe();
  }

  private fetchData = async (root, device) => {
    const resp = await Mam.fetch(root, 'public', null);
    if (resp !== undefined) {
      if (resp.messages.length > 0) {
        const decryptedMessage = [];
        for (let i = 0; i < resp.messages.length; i++) {
          decryptedMessage.push(
            JSON.parse(this.iota.utils.fromTrytes(resp.messages[i]))
          );
          console.log(decryptedMessage[i]);
        }
        const newMessages = device.messages.concat(decryptedMessage);
        // newMessages.push(decryptedMessage);
        device.messages = newMessages;
      }
      this.fetchData(resp.nextRoot, device);
    } else { this.fetchData(root, device); }

  }

  private createSeed() {

      let seed = '';
      const length = 81;
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9';
      const randomValues = new Uint32Array(length);
      const result = new Array(length);

      window.crypto.getRandomValues(randomValues);

      for (let i = 0; i < randomValues.length; i++) {
          result[i] = chars[randomValues[i] % chars.length];
      }

      seed = result.join('');
      return seed;
    }
}
