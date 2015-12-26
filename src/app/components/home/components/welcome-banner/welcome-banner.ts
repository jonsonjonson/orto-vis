import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'welcome-banner'
})
@View({
  template: require('./welcome-banner.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class WelcomeBanner { }
