import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'prosthetics'
})
@View({
  template: require('./prosthetics.html'),
  styles: [
    require('root/styles/helpers.scss'),
    require('root/styles/main.scss')
  ]
})

export class Prosthetics { }
