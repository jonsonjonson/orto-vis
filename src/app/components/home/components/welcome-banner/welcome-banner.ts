import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'welcome-banner'
})
@View({
  template: require('./welcome-banner.html'),
  styles: [
    require('../../../../styles/helpers.scss'),
    require('../../../../styles/main.scss')
  ]
})

export class WelcomeBanner { }
