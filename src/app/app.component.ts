import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController,
              public router: Router) {}


  ionDidOpen(event) {
    // console.log(event);
    this.menu.isOpen().then(() => {
      console.log('opened');
    });
  }

  ionDidClose(event) {
    // console.log(event);
    this.menu.isOpen().then(() => {
      console.log('Closed');
    });
  }

  openEnd(item: string) {
    console.log(item + '-->  is clicked');
    this.menu.close();
  }

  logout() {
    this.router.navigateByUrl('/login');
    console.log('U are out');
  }
}
