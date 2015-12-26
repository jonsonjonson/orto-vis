import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'orthodontics'
})
@View({
  template: require('./orthodontics.html'),
  styles: [
    require('root/styles/helpers.scss'),
    require('root/styles/main.scss')
  ]
})

export class Orthodontics { }
