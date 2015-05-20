$(function() {
  // Masonry
  var $grid = $('#grid');
  $grid.imagesLoaded(function() {
    $grid.masonry({
      // Options
      itemSelector : '.grid-item',
      columnWidth : $(".item").width(),
      gutter: 0
    });
  });

  $('a.select-tag').click(function() {
    $('a.select-tag').css ({
      "background": "none"
    });
    $(this).css({
      "background": "#00f"
    });
  });
});

function filterTag(tag) {
  if (tag == "all") {
    $('.grid-item').show();
  } else {
    $('.grid-item').hide();
    $('.grid-item.tag-'+tag+'').show();
  }
  
  $("#grid").masonry('destroy'); 
  $("#grid").masonry();
}
;
