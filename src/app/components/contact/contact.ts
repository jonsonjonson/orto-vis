import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'contact'
})
@View({
  template: require('./contact.html'),
  styles: [
    require('../../styles/helpers.scss'),
    require('../../styles/main.scss')
  ]
})

export class Contact { }
