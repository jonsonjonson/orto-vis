import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'contact'
})
@View({
  template: require('./contact.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class Contact { }
