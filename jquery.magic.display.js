/*!
* jQuery Magic Display v0.0.1
*
* Copyright 2016 Stefano Zante
* Released under the MIT license
*/

(function($) {

  var magic_display = 'magic-display',
      magic_top = 'magic-top',
      magic_bottom = 'magic-bottom',
      magic_left = 'magic-left',
      magic_right = 'magic-right';

  var magic = magic || {};

  magic.config = {
    top: { top: '0px' },
    bottom: { bottom: '0px' },
    right: { right: '0px' },
    left: { left: '0px' }
  };

  magic.getMagicItemOrientation = function($displayItem) {
    var setting = { };
    setting = $displayItem.hasClass(magic_top) ? magic.config.top : setting;
    setting = $displayItem.hasClass(magic_bottom) ? magic.config.bottom : setting;
    setting = $displayItem.hasClass(magic_left) ? magic.config.left : setting;
    setting = $displayItem.hasClass(magic_right) ? magic.config.right : setting;

    return $.extend({ opacity: 1 }, setting);
  };

  magic.shouldItemBeVisible = function($displayItem, settings) {
    var $window = $(window);
    var itemTop = $displayItem.offset().top;
    itemTop = settings.displayFullVisible ? itemTop + $displayItem.height() : itemTop;

    var containerBottom = $window.scrollTop() + $window.height();

    return (containerBottom > itemTop);
  };

  magic.initDisplayItems = function($displayItem) {

    $displayItem.css({ 'opacity': '0', 'position': 'relative' });

    if($displayItem.hasClass(magic_top)) {
      $displayItem.css({ 'top': '-30px' });
    }

    if($displayItem.hasClass(magic_bottom)) {
      $displayItem.css({ 'bottom': '-30px' });
    }

    if($displayItem.hasClass(magic_left)) {
      $displayItem.css({ 'left': '-60px' });
    }

    if($displayItem.hasClass(magic_right)) {
      $displayItem.css({ 'right': '-60px' });
    }
  };

  magic.detect = function($displayItem, settings) {
    if($displayItem.hasClass(magic_display) && magic.shouldItemBeVisible($displayItem, settings)) {
      var cssToBe = magic.getMagicItemOrientation($displayItem);
      $displayItem.animate(cssToBe, settings.duration);
      $displayItem.removeClass(magic_display);

      if(settings.callback) {
        settings.callback();
      }
    }
  };

  $.fn.magicDisplay = function(options) {
    var defaults = { duration: 1000, minWidth: null, displayFullVisible: false };
    var settings = $.extend(defaults, options);
    var $window = $(window);

    return this.each(function(){
      var useMagic = !settings.minWidth || ($window.width() >= settings.minWidth);
      if(!useMagic) return;

      var $displayItem = $(this);
      var handler = magic.detect.bind(this, $displayItem, settings);

      magic.initDisplayItems($displayItem);
      $window.on('scroll', handler);
    });

  };

})(jQuery);
