import $ from 'jquery';
import checkBreakpoint from '../../js/check-breakpoint/checkBreakpoint';
import moveElementTo from '../../js/moveElementTo';

const shortcutsBreakpointMove = {
    init() {
        const $shortcuts = $('#shortcutsNav');
        const $mobileWrapper = $('#sideNavScroll');
        const $desktopWrapper = $('#shortcutsDesktopWrapper');

        const moveElement = function () {
            if (checkBreakpoint.check(['xs', 'sm', 'md'])) {
                moveElementTo($shortcuts, $mobileWrapper);
            } else {
                moveElementTo($shortcuts, $desktopWrapper);
            }
        }

        // ----- Init
        $(function () {
            moveElement();
        });

        // ----- Resize
        $(window).resize(function () {
            moveElement();
        });
    }
}

export default shortcutsBreakpointMove;
