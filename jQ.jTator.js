(function ($){
    $.fn.jTator = function (options){
        options =  $.extend({
            'speed' : 4000
        }, options);
        return this.each(function (){
            var $darthFader = $(this), rotate;

            function fadeNext() {
                getFirst().stop(true, true).fadeOut().appendTo($darthFader);
                getFirst().stop(true, true).fadeIn();
            }
            function getFirst(){
                return $darthFader.find('img:first');
            }
            $darthFader.addClass('jTator').find('img:not(:first)').hide();
            rotate = setInterval(fadeNext, options.speed);
        });
    };
}(jQuery));