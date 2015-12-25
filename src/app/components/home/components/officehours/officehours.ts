import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'officehours'
})
@View({
  template: require('./officehours.html'),
  styles: [
    require('../../../../styles/helpers.scss')
  ]
})

export class OfficeHours { }
