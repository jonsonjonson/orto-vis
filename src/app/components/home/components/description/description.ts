import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'description'
})
@View({
  template: require('./description.html'),
  styles: [
    require('../../../../styles/helpers.scss')
  ]
})

export class Description { }
