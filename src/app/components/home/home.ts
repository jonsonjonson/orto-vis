import {Component, View} from 'angular2/angular2';

import {MainCarosuel} from '../shared-components/main-carosuel/main-carosuel';



@Component({
  selector: 'home'
})
@View({
  directives: [MainCarosuel],
  template: require('./home.html'),
  styles: [
    require('./styles/test.scss')
  ]
})

export class Home { }
