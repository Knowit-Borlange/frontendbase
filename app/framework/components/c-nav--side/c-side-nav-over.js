import $ from 'jquery';
import '../../js/simplerSidebar';
import PerfectScrollbar from 'perfect-scrollbar';
import 'jquery.easing';

import checkBreakpoint from '../../js/check-breakpoint/checkBreakpoint';

export default (() => {
  $(function ($) {
    const $sideNav = $('#sideNav');
    const $closeButton = $('.close-sidenav');
    const sidenavHideBreakpoint = $sideNav.data('sidenav-hide');

    const ps = new PerfectScrollbar('#sideNavScroll');

    if ($sideNav.length > 0) {
      $sideNav.simplerSidebar({
        align: "right",
        //init: "closed",
        selectors: {
          trigger: "#sidenavToggle",
          quitter: ".close-sidenav"
        },
        sidebar: {
          width: 340
        },
        mask: {
          display: true,
          css: {
            backgroundColor: "black",
            opacity: 0.5,
            filter: "Alpha(opacity=50)"
          }
        },
        events: {
          on: {
            animation: {
              open: function () {
                $('html').addClass('sidenav-open');
                $toggleTabIndex('true');
              },
              close: function () {
                $('html').removeClass('sidenav-open');
                $toggleTabIndex('false');
              }
              //both: function () { }
            }
          },
          callbacks: {
            animation: {
              open: function () { },
              close: function () { },
              both: function () { },
              freezePage: false
            }
          }
        },
        animation: {
          duration: 300,
          easing: "easeOutQuint"
        }
      }).removeClass('d-none');
    }

    // ----- Functions
    const $toggleTabIndex = function ($state) {
      let $links = $('#sidebar').find('a');
      let $buttons = $('#sidebar').find('button');

      if ($state == "true") {
        $links.attr('tabindex', '0');
        $buttons.removeAttr('disabled');
      } else {
        $links.attr('tabindex', '-1');
        $buttons.prop("disabled", true);
      }
    }

    const $breakpointCheck = function () {
      if(checkBreakpoint.check([sidenavHideBreakpoint])) {
        $closeButton.trigger('click');
      }
    }

    // ----- Init
    $toggleTabIndex('false');

    // ----- Resize
    $(window).resize(function () {
      $breakpointCheck();
    });

  });
})();
