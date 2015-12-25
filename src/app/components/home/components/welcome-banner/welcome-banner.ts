import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'welcome-banner'
})
@View({
  template: require('./welcome-banner.html'),
  styles: [
    require('../../../../styles/helpers.scss')
  ]
})

export class WelcomeBanner { }
