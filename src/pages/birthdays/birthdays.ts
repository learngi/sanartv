import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BirthdaysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-birthdays',
  templateUrl: 'birthdays.html',
})
export class BirthdaysPage {
  images = [{
    "image": "http://nebula.wsimg.com/968164bd4ada05827a793005535fdcc5?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/f7b116981de409a7c8ca5e59f7d5203c?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/71621d94bbc57c8fce00ef1cd498af4a?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/ad9e387fe0ebe1e4a73f02639eb84fb1?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/5018007415b20d2f832c621135ab7ca9?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },

  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
    this.images = this.images
  }

  ionViewDidLoad() {
console.log('imags',this.images)
    console.log('ionViewDidLoad BirthdaysPage');
  }



}
