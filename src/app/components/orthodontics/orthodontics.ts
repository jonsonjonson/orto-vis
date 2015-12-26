import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'orthodontics'
})
@View({
  template: require('./orthodontics.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class Orthodontics { }
