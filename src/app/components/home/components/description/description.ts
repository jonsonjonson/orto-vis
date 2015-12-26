import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'description'
})
@View({
  template: require('./description.html'),
  styles: [
    require('root/styles/helpers.scss'),
    require('root/styles/main.scss')
  ]
})

export class Description { }
