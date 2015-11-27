import {Component, View} from 'angular2/angular2';

import {MainCarosuel} from '../shared-components/main-carosuel/main-carosuel';
import {WelcomeBanner} from './components/welcome-banner/welcome-banner';
import {OfficeHours} from './components/officehours/officehours';
import {DocplannerBanner} from './components/docplanner-banner/docplanner-banner';
import {Services} from './components/services/services';
import {Specialists} from './components/specialists/specialists';
import {Certificates} from './components/certificates/certificates';
import {Description} from './components/description/description';



@Component({
  selector: 'home'
})
@View({
  directives: [
    MainCarosuel,
    WelcomeBanner,
    OfficeHours,
    DocplannerBanner,
    Services, Specialists,
    Certificates,
    Description
  ],
  template: require('./home.html'),
  styles: [
    require('./styles/test.scss')
  ]
})

export class Home { }
