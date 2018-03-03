import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  birthday() {
    this.navCtrl.push('BirthdaysPage')
  }
  love() {
    this.navCtrl.push('LovePage')
  }
  names() {
    this.navCtrl.push('NamesPage')
  }
  frames() {
    this.navCtrl.push('FramesPage')
  }
}
