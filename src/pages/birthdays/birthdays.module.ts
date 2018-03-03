import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BirthdaysPage } from './birthdays';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    BirthdaysPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(BirthdaysPage),    
  ],
})
export class BirthdaysPageModule {}
