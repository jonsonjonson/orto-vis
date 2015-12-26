import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'dentistry'
})
@View({
  template: require('./dentistry.html'),
  styles: [
    require('../../styles/helpers.scss'),
    require('../../styles/main.scss')
  ]
})

export class Dentistry { }
