  var item = '.timeline-item';
  var content = '.p-timeline-content';
  var active = 'i-is-active';

   var defaultItem = $('.timeline-item:first');
   showTimelineContent(defaultItem);

  $('.timeline-item').on('click', function(){ showTimelineContent(this); });
  $('.close').on('click', function(){ closeCurrentContent(this); });

  function showTimelineContent(element){
    var itemId = $(element).find('.p-timeline-carmodel').attr('data-car');
    var highlighted = $(element).find('.p-timeline-carmodel');

    if($(item).hasClass(active)){ $(item).removeClass(active); }

    $(content).each(function(){
      var contentid = $(this).attr('data-car');

      if(itemId == contentid){
        var current = $(content +'[data-car="'+contentid+'"]');
        $(current).addClass(active);
        $(element).addClass(active);

        $(content).not(current).removeClass(active);

        var target= $(current);
        $('html, body').stop().animate({ scrollTop: target.offset().top }, 1000);
      }
    });
  }

 function closeCurrentContent(event){
    var contentblock = $(event).parents(content);
    var contentid = $(contentblock).attr('data-car');
    $(item).each(function(){
      var itemId = $(this).find('.p-timeline-carmodel').attr('data-car');
      
      if(itemId == contentid){
        var target= $('.timeline-title');
        $('html, body').stop().animate({ scrollTop: target.offset().top }, 1000);

        var currentItem = $(this).removeClass(active);
        contentblock.removeClass(active);

      }
    });
  }