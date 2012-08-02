(function($) {
  Drupal.behaviors.theme_hider = function() {
    $('#theme-hider-check-all').click(function() {
      $('input[name^=theme_hider_hidden]').each(function() {
        $(this).attr('checked', true);
      });
    });
    $('#theme-hider-uncheck-all').click(function() {
      $('input[name^=theme_hider_hidden]').each(function() {
        $(this).attr('checked', false);
      });
    });
  };
}(jQuery));