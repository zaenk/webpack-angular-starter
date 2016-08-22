import 'jquery';
import 'bootstrap-sass/assets/javascripts/bootstrap';

import MyApp from './MyApp';
import AppComponent from './app.component';
import hello from './hello';

import './app.scss';

MyApp.directive('app', AppComponent);

console.log(hello('world'));
