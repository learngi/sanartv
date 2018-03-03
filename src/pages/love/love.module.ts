import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LovePage } from './love';
import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    LovePage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(LovePage),
  ],
})
export class LovePageModule {}
