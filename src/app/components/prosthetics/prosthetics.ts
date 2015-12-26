import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'prosthetics'
})
@View({
  template: require('./prosthetics.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class Prosthetics { }
