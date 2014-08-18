'use strict';

(function($) {
    $(document).ready(function(){
        var margin = 1;
        if (typeof endless_on_scroll_margin != 'undefined') {
            margin = endless_on_scroll_margin;
        }
        $(window).scroll(function(){
            if ($(document).height() - $(window).height() - $(window).scrollTop() <= margin) {
                if ($('a.endless_more').attr('href') !== "") {
                    $("a.endless_more").click();
                }
            }
        });
    });
})(jQuery);
