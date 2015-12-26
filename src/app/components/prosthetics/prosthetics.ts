import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'prosthetics'
})
@View({
  template: require('./prosthetics.html'),
  styles: [
    require('../../styles/helpers.scss'),
    require('../../styles/main.scss')
  ]
})

export class Prosthetics { }
