(function ($){
    $.fn.jTator = function (options){
        options =  $.extend({
            'speed' : 4000
        }, options);
        return this.each(function (){
            var $darthFader = $(this),
                rotate;

            function getFirst(){
                return $darthFader.find('>:first');
            }
            function fadeNext() {
                getFirst().fadeOut("fast", function (){
                    $(this).appendTo($darthFader);
                    getFirst().fadeIn(options.speed/2);
                });
            }
            $darthFader.addClass('jTator').find('>:not(:first)').hide();
            rotate = setInterval(fadeNext, options.speed);
        });
    };
}(jQuery));