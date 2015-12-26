import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'services-banner'
})
@View({
  template: require('./services-banner.html'),
  styles: [
    require('root/styles/helpers.scss'),
    require('root/styles/main.scss'),
    require('./styles/services-banner.scss')
  ]
})

export class Banner { }
