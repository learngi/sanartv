import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-names',
  templateUrl: 'names.html',
})
export class NamesPage {
  images = [{
    "image": "http://nebula.wsimg.com/c2fbd2678629159190105a39ad41baba?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/8de3cc569a8dcf9ee0e571ab799b8174?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/e7617cf4ccc303c2e36bc2af9bd7552e?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/6bc4d960e08cbb89c4b433f2aab9e738?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },


  {
    "image": "http://nebula.wsimg.com/eb17d4ee06ade238a3957f5db27ee2c5?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/a5d9d6ea95299ebbfb9d289972d64853?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  },
  {
    "image": "http://nebula.wsimg.com/f649d431bf0c7c7d963f8335735dc5d9?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1",

  }

]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
    this.images = this.images
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NamesPage');
  }

}
