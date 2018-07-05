import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { DataProvider } from '../provider/data';
import { Camera } from '@ionic-native/camera';
import { Clipboard } from '@ionic-native/clipboard';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { PenemuanPage } from '../pages/penemuan/penemuan';
import { KehilanganPage } from '../pages/kehilangan/kehilangan';
import { LaporPage } from '../pages/lapor/lapor';
import { LaporkehilanganPage } from '../pages/laporkehilangan/laporkehilangan';
import { LaporpenemuanPage } from '../pages/laporpenemuan/laporpenemuan';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { UploadPage } from '../pages/upload/upload';
import { PostdetailPage } from '../pages/postdetail/postdetail';
import { MykehilanganPage } from '../pages/mykehilangan/mykehilangan';
import { MypenemuanPage } from '../pages/mypenemuan/mypenemuan';
import { MykomentarPage } from '../pages/mykomentar/mykomentar';
import { NotifPage } from '../pages/notif/notif';

class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("BASE_64_ENCODED_DATA_GOES_HERE");
    })
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	RegisterPage,
	MenuPage,
	PenemuanPage,
	KehilanganPage,
	LaporPage,
	LaporkehilanganPage,
	LaporpenemuanPage,
	ProfilePage,
	TabsPage,
  UploadPage,
  PostdetailPage,
  MykehilanganPage,
  MypenemuanPage,
  MykomentarPage,
  NotifPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	RegisterPage,
	MenuPage,
	PenemuanPage,
	KehilanganPage,
	LaporPage,
	LaporkehilanganPage,
	LaporpenemuanPage,
	ProfilePage,
	TabsPage,
  UploadPage,
  PostdetailPage,
  MykehilanganPage,
  MypenemuanPage,
  MykomentarPage,
  NotifPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: Camera, useClass: CameraMock },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Clipboard,
    DataProvider
  ]
})
export class AppModule {}
