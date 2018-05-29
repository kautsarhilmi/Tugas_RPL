import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PenemuanPage } from '../penemuan/penemuan';
import { LaporPage } from '../lapor/lapor';
import { KehilanganPage } from '../kehilangan/kehilangan';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {

	tabPenemuan = PenemuanPage;
	tabLapor = LaporPage;
	tabKehilangan = KehilanganPage;
	
	constructor() {
		
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
