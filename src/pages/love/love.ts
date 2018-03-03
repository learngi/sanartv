import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-love',
  templateUrl: 'love.html',
})
export class LovePage {
  images = [{
    "image": "http://nebula.wsimg.com/5018007415b20d2f832c621135ab7ca9?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/1822d7131954b910cbe1eb1cddc31441?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/0b5b709d3f558c04fe00f712a7b3c2fb?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/0d14ae86d1e97539703a5e75ca401229?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },


  {
    "image": "http://nebula.wsimg.com/d985989de35c57b443f03456b47d6450?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/36e9fa624bc46947d6ce7bd27ba2821f?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/7a45c21aed34c1e3dbc1bb57253099e3?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "images":"http://nebula.wsimg.com/aa86d36f0cb94a9f47253400a47dd311?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1"
  },
  {
    "images":"http://nebula.wsimg.com/1e2401e98027f978bec514888d9cb6e0?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1"
  }

]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){ 
    this.images = this.images
  }
  ionViewDidLoad() {
    console.log('images',this.images)
    console.log('ionViewDidLoad LovePage');
  }

}
