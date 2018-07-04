import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MykomentarPage } from './mykomentar';

@NgModule({
  declarations: [
    MykomentarPage,
  ],
  imports: [
    IonicPageModule.forChild(MykomentarPage),
  ],
})
export class MykomentarPageModule {}
