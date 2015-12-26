import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'dentistry'
})
@View({
  template: require('./dentistry.html'),
  styles: [
    require('root/styles/helpers.scss'),
    require('root/styles/main.scss')
  ]
})

export class Dentistry { }
