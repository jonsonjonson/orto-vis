import {Component, View} from 'angular2/angular2';

import {Banner} from './components/services-banner/services-banner'
import {Description} from './components/services-description/services-description';



@Component({
  selector: 'services'
})
@View({
  directives: [Banner, Description],
  template: require('./services.html')
})

export class Services { }
