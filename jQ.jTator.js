(function($){
    $.fn.jTator = function(options) {
        var options =  $.extend({
              'speed' : 4000
        }, options );
        return this.each(function() {
            var $darthFader = $(this);
            $darthFader.addClass('jTator').find('img:not(:first)').hide();
            function fadeNext() {
                getFirst().stop(true, true).fadeOut().appendTo($darthFader);
                getFirst().stop(true, true).fadeIn();
            }
            function getFirst(){
                return $darthFader.find('img:first');
            }
            var rotate = setInterval(fadeNext, options.speed);
        });
    };
}(jQuery));