import { Component } from '@angular/core';
// import { Network } from '@ionic-native/network/ngx';
import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  message: string;

  // constructor(private network: Network) {
  // }

  // disconnect() {
  //   const disco = this.network.onDisconnect()
  //       .subscribe(() => {
  //         this.message = 'J\'ai perdu le réseau :-(';
  //       });
  // }

  constructor() {
    Network.addListener('networkStatusChange', (status) => {
      console.log(status);
      this.message = status.connected ? 'Connecté' : 'Déconnecté';
    });
  }

  async start() {
    const status = await Network.getStatus();
    if (status.connected) {
      this.message = 'Connecté';
    }
  }

}
