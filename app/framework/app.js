'use strict';


import $ from 'jquery';
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
require('bootstrap');


require('what-input');


// ----- Breakpoint checker
// -----
import checkBreakpoint from './js/check-breakpoint/checkBreakpoint';
checkBreakpoint.init();
// Use as below in component
// import checkBreakpoint from '../../framework/js/check-breakpoint/checkBreakpoint';
// if (checkBreakpoint.check(['xs', 'sm', 'md'])) {}


// ----- Navigations
// -----
import "./components/c-nav--side/c-side-nav-over.js";


import shortcutsBreakpointMove from './components/c-nav--shortcuts/shortcutsBreakpointMove';
shortcutsBreakpointMove.init();
