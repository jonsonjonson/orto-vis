import {Component, View} from 'angular2/angular2';



@Component({
  selector: 'docplanner-banner'
})
@View({
  template: require('./docplanner-banner.html'),
  styles: [
    require('common/styles/helpers.scss'),
    require('common/styles/main.scss')
  ]
})

export class DocplannerBanner { }
