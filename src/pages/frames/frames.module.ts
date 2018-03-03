import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FramesPage } from './frames';
import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    FramesPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(FramesPage),
  ],
})
export class FramesPageModule {}
