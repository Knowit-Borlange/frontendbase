import $ from 'jquery';
import {breakpoints} from '../globals';

const checkBreakpoint = {
  init() {
    $(function () {
      let $breakpoints = '<div class="check-breakpoints">';
      $breakpoints += '<div class="d-block d-sm-none" id="xsBreakpointElement"></div>';
      $breakpoints += '<div class="d-none d-sm-block d-md-none" id="smBreakpointElement"></div>';
      $breakpoints += '<div class="d-none d-md-block d-lg-none" id="mdBreakpointElement"></div>';
      $breakpoints += '<div class="d-none d-lg-block d-xl-none" id="lgBreakpointElement"></div>';
      $breakpoints += '<div class="d-none d-xl-block" id="xlBreakpointElement"></div>';
      $breakpoints += '</div>'
      $('body').append($breakpoints);
    });
  },
  check(breakpointList) {
    const allBreakpoints = breakpoints;
    let activeBreakpoint = "";

    for(let i = 0; i < allBreakpoints.length; i++) {
      let $element = $('#' + allBreakpoints[i] + 'BreakpointElement');
      if ($element.is(':visible')) {
        activeBreakpoint = allBreakpoints[i];
        break;
      }
    }

    if(breakpointList.includes(activeBreakpoint)) {
      return true
    } else {
      return false;
    }
  }
};

export default checkBreakpoint;
