import '@babel/polyfill';
import './modules/append-polyfill';
import 'fetch-polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ourTeam from './modules/ourTeam';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//Timer

countTimer('14 May 2020');

//Menu

toggleMenu();

//popup

togglePopup();

//tabs

tabs();

//slider

slider();

//outTeam

ourTeam();

//calculator


calc(100);

//send-ajax-form

sendForm();

