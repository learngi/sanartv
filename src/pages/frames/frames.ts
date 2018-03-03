import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FramesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frames',
  templateUrl: 'frames.html',
})
export class FramesPage {
images= [{
  "image":"http://nebula.wsimg.com/fb345b32667ee8ed534dfebd9ca1e356?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1"
},
{
  "image":"http://nebula.wsimg.com/1b308b911d835c7c615f16b8f00aa02b?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1"
},
{
  "image":"http://nebula.wsimg.com/7bbb91057d7892b004d7f34c1dc3a9a6?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1"
},
{
  "image":"http://nebula.wsimg.com/5dee790445460baf6b2c1c79d70dad31?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1"
},
{
  "image":"http://nebula.wsimg.com/298d25abe636c6e68c121f0a4a4a38ce?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1"
},
{
  "image":"http://nebula.wsimg.com/c0a5937a66eae637122dea54f7767338?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1"
},
{
  "image":"http://nebula.wsimg.com/26523b7322771091dd34e2625b15f591?AccessKeyId=E6F184CA5BC264C65042&disposition=0&alloworigin=1"
},

]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 ionViewWillEnter(){
   this.images = this.images 
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FramesPage');
  }

}
