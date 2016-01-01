import {Component, View} from 'angular2/angular2';

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
    WelcomeBanner,
    OfficeHours,
    DocplannerBanner,
    Services, Specialists,
    Certificates,
    Description
  ],
  template: require('./home.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class Home { }
