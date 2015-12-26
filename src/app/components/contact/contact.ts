import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'contact'
})
@View({
  template: require('./contact.html'),
  styles: [
    require('root/styles/helpers.scss'),
    require('root/styles/main.scss')
  ]
})

export class Contact { }
