import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NamesPage } from './names';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    NamesPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(NamesPage),
  ],
})
export class NamesPageModule {}
