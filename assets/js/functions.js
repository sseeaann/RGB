$(function(){
  var $body = $('body'),
      $RGB = $('#R, #G, #B'),
      inArr = {R:false, G:false, B:false};


  $('#R').mouseenter(function(){
    $body.css('background','#BF2D32');
    $RGB.css('color','#BF2D32');
    $('#G, #B').css('opacity','0.25');
  });
  $('#R').mouseout(function(){
    $('#G, #B').css('opacity','1');
  });

  $('#G').mouseenter(function(){
    $body.css('background','#358C3F');
    $RGB.css('color','#358C3F');
    $('#R, #B').css('opacity','0.25');
  });
  $('#G').mouseout(function(){
    $('#R, #B').css('opacity','1');
  });

  $('#B').mouseenter(function(){
    $body.css('background','#015F97');
    $RGB.css('color','#015F97');
    $('#R, #G').css('opacity','0.25');
  });
  $('#B').mouseout(function(){
    $('#R, #G').css('opacity','1');
  });

  $RGB.mouseenter(function(){
    inArr [$(this).attr('id')] = true;
    ahh();
  });

  $RGB.mouseout(function(){
    inArr [$(this).attr('id')] = false;
    $body.css('background','#FFFFFF');
    $RGB.css('color','#FFFFFF');
    setTimeout(function(){
      if(!inArr.R && !inArr.G && !inArr.B){
        ohhh();
      }
    },300);
  });

  function ahh(){
    $('#ahh')[0].load();
    $('#ahh')[0].play();
  }

  function ohhh(){
    $('#ohhh')[0].load();
    $('#ohhh')[0].play();
  }

});
