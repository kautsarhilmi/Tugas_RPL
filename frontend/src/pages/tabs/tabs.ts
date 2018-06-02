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
	whatIndex: number;
	tabPenemuan = PenemuanPage;
	tabLapor = LaporPage;
	tabKehilangan = KehilanganPage;
	
	constructor(public navParams: NavParams) {
		this.whatIndex = navParams.get('opentab');
		console.log(this.whatIndex);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
