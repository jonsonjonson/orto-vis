import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'officehours'
})
@View({
  template: require('./officehours.html'),
  styles: [
    require('root/styles/helpers.scss'),
    require('root/styles/main.scss')
  ]
})

export class OfficeHours { }
