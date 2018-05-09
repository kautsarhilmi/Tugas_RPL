import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { PenemuanPage } from '../pages/penemuan/penemuan';
import { KehilanganPage } from '../pages/kehilangan/kehilangan';
import { LaporPage } from '../pages/lapor/lapor';
import { LaporkehilanganPage } from '../pages/laporkehilangan/laporkehilangan';
import { LaporpenemuanPage } from '../pages/laporpenemuan/laporpenemuan';
import { TabsPage } from '../pages/tabs/tabs';


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
	TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
	TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
