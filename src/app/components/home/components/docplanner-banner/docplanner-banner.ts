import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'docplanner-banner'
})
@View({
  template: require('./docplanner-banner.html'),
  styles: [
    require('root/styles/helpers.scss'),
    require('root/styles/main.scss')
  ]
})

export class DocplannerBanner { }
