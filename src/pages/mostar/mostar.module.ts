import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostarPage } from './mostar';

@NgModule({
  declarations: [
    MostarPage,
  ],
  imports: [
    IonicPageModule.forChild(MostarPage),
  ],
})
export class MostarPageModule {}
