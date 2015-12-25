import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'officehours'
})
@View({
  template: require('./officehours.html'),
  styles: [
    require('../../../../styles/helpers.scss'),
    require('../../../../styles/main.scss')
  ]
})

export class OfficeHours { }
