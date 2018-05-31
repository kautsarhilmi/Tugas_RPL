import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { DataProvider } from '../provider/data';
import { Camera } from '@ionic-native/camera';

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
	TabsPage
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
	TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: Camera, useClass: CameraMock },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
