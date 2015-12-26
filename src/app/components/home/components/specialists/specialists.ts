import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'specialists'
})
@View({
  template: require('./specialists.html'),
  styles: [
    require('root/styles/helpers.scss'),
    require('root/styles/main.scss')
  ]
})

export class Specialists { }
