import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'services-description'
})
@View({
  template: require('./services-description.html'),
  styles: [
    require('../../../../../../styles/helpers.scss')
  ]
})

export class Description { }
