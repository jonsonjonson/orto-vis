import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'officehours'
})
@View({
  template: require('./officehours.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class OfficeHours { }
