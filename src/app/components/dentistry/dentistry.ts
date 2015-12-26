import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'dentistry'
})
@View({
  template: require('./dentistry.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class Dentistry { }
