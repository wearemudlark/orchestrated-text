$(document).ready(function() {
    $('html').bind("touchmove", {}, function(event){
  event.preventDefault();
});
    
    currentTrigger = 0;
    noauto = false;
    nolyrics = false;
    
    if (location.hash == '#nolyrics') {
        nolyrics = true;
    }
    
    if (location.hash == '#noauto' || noauto == true) {
        
        $("#jpId").jPlayer( {
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: "res/winter.mp3", 
                oga: "res/winter.ogg" 
            });
        },
        volume: 0.9,
        supplied: "mp3, oga",
        swfPath: "./res/"
    });
    
    noauto = true;
        
    }
    else {
        $("#jpId").jPlayer( {
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "res/winter.mp3", 
            oga: "res/winter.ogg" 
          }).jPlayer("play");
        },
        volume: 0.9,
        supplied: "mp3, oga",
        swfPath: "./res/"
        });
    }
    
  
  
  $('#credits').click(function () {
      if ($(this).text() == 'Credits') {
          $('#creditsbox').fadeIn(500);
          $(this).text('Hide Credits');
      }
      else {
          $('#creditsbox').fadeOut(500);
          $(this).text('Credits');
      }
  })
  
 
    $('#stop').click(function() {
    $('#jpId').jPlayer('stop');
    $('#play').text('>');
    });
    
    $('#play').click(function() {
    $('#jpId').jPlayer('play');
    });
  
 $('#pause').click(function() {
    $('#jpId').jPlayer('pause');
$('#play').text('>');
    });

  $('#jpId').bind($.jPlayer.event.playing, function(event) {
     $('#play').text('>');
     startLyrics();
  });
  $('#jpId').bind($.jPlayer.event.loadstart, function(event) {
     $('#play').text('loading...');
  });
  $('#jpId').bind($.jPlayer.event.suspend, function(event) {
     $('#play').text('>');
  });

  
  $('#jpId').bind($.jPlayer.event.ended, function(event) {
     $('#jpId').jPlayer('play');
     $('#play').text('>');
  });
  
  $('#jpId').bind($.jPlayer.event.timeupdate, function(event) {
     $('#time').html($.jPlayer.convertTime(event.jPlayer.status.currentTime));
     
     if (event.jPlayer.status.currentTime >= timings[currentTrigger] && nolyrics != true) {
         fireTrigger(currentTrigger);
         currentTrigger++;
     }
     
     
  });
  
  
function startLyrics () {
    $('#line1').hide().css('fontSize', '');
    $('#line2').hide().css('fontSize', '');
 $('#line2b').hide().css('fontSize', '');
$('#line2bc').hide().css('fontSize', '');
$('#line2d').hide().css('fontSize', '');
$('#line2e').hide().css('fontSize', '');
$('#line3').hide().css('fontSize', '');
 $('#line3b').hide().css('fontSize', '');
$('#line4').hide().css('fontSize', '');
$('#line4b').hide().css('fontSize', '');
$('#line5').hide().css('fontSize', '');
$('#line5b').hide().css('fontSize', '');
$('#line5c').hide().css('fontSize', '');
$('#line5d').hide().css('fontSize', '');
$('#line5e').hide().css('fontSize', '');
$('#line6').hide().css('fontSize', '');
$('#line6b').hide().css('fontSize', '');
$('#line6c').hide().css('fontSize', '');
$('#line6d').hide().css('fontSize', '');
$('#line7').hide().css('fontSize', '');
$('#line8').hide().css('fontSize', '');


    currentTrigger = 0;
    
    
}

function fireTrigger(trigger) {
    switch (trigger) {
            case 0:
                $('#line1').html(lyrics[3]).addClass('titlefade').fadeIn(1000);
                break;
case 1: $('#line2').html(lyrics[4]).addClass('titlefade').fadeIn(1000);
                break;
                
            case 2:
                $('#line3').html(lyrics[5]).fadeIn(000);
                                break;
                
            case 3:
                $('#line4').html(lyrics[6]).addClass('titlefade').fadeIn(200);
		break;
                
            case 4:
                $('#line5').html(lyrics[7]).fadeIn(1000);
                break;
            case 5:
$('#line6').html(lyrics[8]).addClass('splitline').fadeIn(000).delay(5000).fadeOut(000);
                                break;
            case 6:
                $('#line6b').html(lyrics[9]).addClass('splitline').fadeIn(000).delay(4000).fadeOut(000);
break;
            case 7:
                $('#line6c').html(lyrics[10]).addClass('splitline').fadeIn(000).delay(3000).fadeOut(000);
                break;
            case 8:
                $('#line6d').html(lyrics[11]).addClass('splitline').fadeIn(000).delay(2000).fadeOut(000);
             
                break;
case 9:
$('#line1').removeClass('titlefade').fadeOut(000);
$('#line2').removeClass('titlefade').fadeOut(000);
$('#line3').removeClass('titlefade').fadeOut(000);
$('#line4').removeClass('titlefade').fadeOut(000);
$('#line5').removeClass('titlefade').fadeOut(000);
$('#line6').removeClass('splitline');
$('#line6b').removeClass('splitline');
$('#line6c').removeClass('splitline');
$('#line6d').removeClass('splitline');
break;

            case 10:

                $('#line1').html(lyrics[12]).addClass('titlefade').fadeIn(000);
                break;
            case 11:

                $('#line2').html(lyrics[13]).fadeIn(000);
                break;

                case 12:

                $('#line3').html(lyrics[14]).fadeIn(000);
                break;
case 13:

                $('#line4').html(lyrics[15]).addClass('titlefade').fadeIn(000);
                break;
case 14:

                $('#line5').html(lyrics[16]).fadeIn(1000);
                break;
case 15:

                $('#line6').html(lyrics[17]).addClass('titlefade').fadeIn(1000);
                break;
case 16:

                $('#line6b').html(lyrics[17]).addClass('titlefade').fadeIn(1000).delay(000).fadeOut(1000);
                break;
case 17:

                $('#line7').html(lyrics[18]).addClass('titlefade').fadeIn(1000);
                break;

case 18:
$('#line1').removeClass('titlefade').fadeOut(000);
$('#line2').removeClass('titlefade').fadeOut(000);
$('#line3').removeClass('titlefade').fadeOut(000);
$('#line4').removeClass('titlefade').fadeOut(000);
$('#line5').removeClass('titlefade').fadeOut(000);
$('#line6').removeClass('titlefade').fadeOut(000);
$('#line6b').removeClass('titlefade').fadeOut(000);
$('#line7').removeClass('titlefade').fadeOut(000);
break;

case 19:

                $('#line1').html(lyrics[19]).addClass('titlefade').fadeIn(000);
                break;
case 20:

                $('#line2').html(lyrics[20]).fadeIn(000);
                break;
case 21:

                $('#line3').html(lyrics[21]).addClass('titlefade').fadeIn(000);
                break;
case 22:

                $('#line4').html(lyrics[22]).addClass('titlefade').fadeIn(000);
                break;
case 23:

                $('#line6').html(lyrics[23]).addClass('splitline2').fadeIn(1000);
                break;
case 24:

                $('#line6b').html(lyrics[24]).addClass('splitline2').fadeIn(000);
                break;
case 25:

                $('#line6c').html(lyrics[25]).addClass('splitline2').fadeIn(000);
                break;
case 26:

                $('#line6d').html(lyrics[26]).addClass('splitline2').fadeIn(000);
                break;
case 27:

                $('#line7').html(lyrics[27]).addClass('titlefade').fadeIn(2000);
                break;

case 28:

$('#line1').fadeOut(1000);
$('#line2').fadeOut(1000);
$('#line3').fadeOut(1000);
$('#line4').fadeOut(1000);
$('#line5').fadeOut(1000);
$('#line6').fadeOut(1000);
$('#line6b').fadeOut(1000);
$('#line6c').fadeOut(1000);
$('#line6d').fadeOut(1000);
$('#line7').fadeOut(1000);
$('#line6').removeClass('splitline2');
$('#line6b').removeClass('splitline2');
$('#line6c').removeClass('splitline2');
$('#line6d').removeClass('splitline2');
 break;

case 29:
                $('#line1').removeClass('titlefade').html(lyrics[28]).fadeIn(1000);
                break;
case 30:
$('#line2').html(lyrics[29]).addClass('titlefade').fadeIn(1000);
                break;

case 31:
$('#line3').removeClass('titlefade').html(lyrics[30]).fadeIn(000);
                break;
case 32:
$('#line4').html(lyrics[31]).addClass('titlefade').fadeIn(1000);
                break;
case 33:
$('#line5').html(lyrics[32]).fadeIn(000);
                break;
case 34:
$('#line6').html(lyrics[33]).addClass('titlefade').fadeIn(1000);
                break;

case 35:

$('#line1').fadeOut(1000);
$('#line2').fadeOut(1000);
$('#line3').fadeOut(1000);
$('#line4').fadeOut(1000);
$('#line5').fadeOut(1000);
$('#line6').fadeOut(1000);
$('#line6b').fadeOut(1000);
$('#line6c').fadeOut(1000);
$('#line6d').fadeOut(1000);
$('#line7').fadeOut(1000);
$('#line6').removeClass('splitline2');
$('#line6b').removeClass('splitline2');
$('#line6c').removeClass('splitline2');
$('#line6d').removeClass('splitline2');

 break;

case 36:
$('#line1').html(lyrics[34]).removeClass('titlefade').fadeIn(000);
                break;
case 37:
$('#line2').html(lyrics[35]).removeClass('titlefade').fadeIn(1000);
                break;
case 38:
$('#line3').html(lyrics[36]).addClass('titlefade').fadeIn(000);
                break;
case 39:
$('#line4').html(lyrics[37]).addClass('titlefade').fadeIn(000);
                break;
case 40:
$('#line5').html(lyrics[38]).addClass('titlefade').fadeIn(000);
                break;
case 41:
$('#line6').html(lyrics[39]).addClass('titlefade').addClass('splitline2').fadeIn(000);
                break;
case 42:
$('#line6b').html(lyrics[40]).addClass('titlefade').addClass('splitline2').fadeIn(000);
                break;
case 43:
$('#line7').html(lyrics[41]).addClass('titlefade').fadeIn(000);
                break;
case 44:
$('#line1').fadeOut(000);
$('#line2').fadeOut(000);
$('#line3').fadeOut(000);
$('#line4').fadeOut(000);
$('#line5').fadeOut(000);
$('#line6').fadeOut(000);
$('#line6b').fadeOut(000);
$('#line7').fadeOut(000);
$('#line6').removeClass('splitline2');
$('#line6b').removeClass('splitline2');
$('#line6c').removeClass('splitline2');
$('#line6d').removeClass('splitline2');

                break;

case 45:
$('#line1').html(lyrics[42]).removeClass('titlefade').fadeIn(000);
                break;

case 46:
$('#line2').html(lyrics[43]).removeClass('titlefade').fadeIn(000);
                break;

case 47:
$('#line3').html(lyrics[44]).removeClass('titlefade').fadeIn(000);
                break;

case 48:
$('#line4').html(lyrics[45]).removeClass('titlefade').fadeIn(1000);
                break;

case 49:
$('#line5').html(lyrics[46]).addClass('titlefade').fadeIn(000);
                break;

case 50:
$('#line6').html(lyrics[47]).addClass('titlefade').addClass('splitline2').fadeIn(000);
                break;

case 51:
$('#line6b').html(lyrics[48]).addClass('titlefade').addClass('splitline2').fadeIn(000);
                break;
case 52:
$('#line6c').html(lyrics[49]).addClass('titlefade').addClass('splitline2').fadeIn(000);
                break;

case 53:
$('#line7').html(lyrics[50]).addClass('titlefade').fadeIn(000);
                break;

case 54:
$('#line1').fadeOut(7000);
$('#line2').fadeOut(7000);
$('#line3').fadeOut(7000);
$('#line4').fadeOut(7000);
$('#line5').fadeOut(7000);
$('#line6').fadeOut(7000);
$('#line6b').fadeOut(7000);
$('#line6c').fadeOut(7000);
$('#line7').fadeOut(7000);
break;

case 55:
$('#line6').removeClass('splitline2');
$('#line6b').removeClass('splitline2');
$('#line6c').removeClass('splitline2');
$('#line6d').removeClass('splitline2');

                break;



            default:
                break;
        }

}


  
  timings = new Array();
  timings[0] = 2; // Shivering 
  timings[1] = 4; // in the Frozen Snow
  timings[2] = 10.4; // the orchestra plays discordant notes
  timings[3] = 16; // A freezing atmosphere
  timings[4] = 20; // unlike the warm melodies of other seasons
  timings[5] = 25.2; // but 
timings[6] = 28.1; //something 
timings[7] = 29.6; //is 
timings[8] = 31.1; //coming
timings[9] = 32.5; //empty all lines
  timings[10] = 34; // A Violent Storm!
  timings[11] = 41.2; // A solo violin plays descending notes
timings[12] = 45.5; // & the orchestra emphasises harmony and rhythm
timings[13] = 48.4; // Gusts of Freezing Wind
timings[14] = 56; // Everyone plays together
timings[15] = 57.2; // Shivering
timings[16] = 59.9; // Shivering
timings[17] = 62; // and then
timings[18] = 64.5; //empty all lines 
timings[19] = 66; // People Running Around
timings[20] = 67.5; // and
timings[21] = 69; // Stamping Their Feet
timings[22] = 73.3; // to keep warm
timings[23] = 76.5; // The solo violin plays 
timings[24] = 78; // short 
timings[25] = 78.8; // quick 
timings[26] = 79.6; // melodies
timings[27] = 84.6; // The body shivering in the cold
timings[28] = 96.5; // clear all lines
timings[29] = 98; // Now the orchestra rises again
timings[30] = 101; // Sudden blasts of wind!
timings[31] = 114.6; // Listen for those dissonant harmonies
timings[32] = 117.9; // The icy atmosphere
timings[33] = 130; // This violin solo has different melodies and short intervals
timings[34] = 134.5; // Bracing against the cold
timings[35] = 138; // clear all lines
timings[36] = 139.6; // can you hear those quick notes?
timings[37] = 145; // they are chattering teeth
timings[38] = 148.7; // clicking together in this icy scene
timings[39] = 151.6; // Chatter chatter
timings[40] = 153.1; // Chatter chatter
timings[41] = 154.6; // Chatter chatter
timings[42] = 156; // Chatter chatter
timings[43] = 157.6; // Chatter chatter
timings[44] = 166.6; // clear all lines 
timings[45] = 168.1; // The orchestra comes back together 
timings[46] = 169.6; // To replay that distinctive main theme
timings[47] = 172.6; // that brings the first movement of 'Winter' to a close
timings[48] = 174; // after wintery images and moods like
timings[49] = 175.5; // cold
timings[50] = 177; // ice
timings[51] = 178.5; // shivering
timings[52] = 179.6; // agitation
timings[53] = 181.6; // and crisp beauty
timings[54] = 188.4 // clear all lines with 7 second fade  
timings[55] = 195 // line 6 clear  
/*
   * 
   */
  
  


    lyrics = new Array();
    lyrics[0] = 'Winter';
lyrics[1] = "Op. 8 No. 4 Concerto In F Minor";
    lyrics[2] = "1. Allegro Non Molto";
    
lyrics[3] = 'Shivering';
    lyrics[4] = 'in the Frozen Snow';    
    lyrics[5] = 'The orchestra plays discordant notes that give the impression of snow falling and the cold of winter.';
    lyrics[6] = 'A freezing atmosphere';
    lyrics[7] = "(unlike the warm melodies of Vivaldi's other seasons)";
    lyrics[8] = 'but';
lyrics[9] = 'something';
lyrics[10] = 'is';
lyrics[11] = 'coming';
lyrics[12] = 'A Violent Storm!';
    lyrics[13] = 'A solo violin plays descending notes';
lyrics[14] = '& the orchestra emphasises harmony, rhythm and drama';
lyrics[15] = 'Gusts of Freezing Wind!';
lyrics[16] = 'The instruments play together';
lyrics[17] = 'Shivering';
lyrics[18] = 'and then';
lyrics[19] = 'People Running Around';
lyrics[20] = 'and';
lyrics[21] = 'Stamping Their Feet';
lyrics[22] = 'to keep warm';
lyrics[23] = 'The solo violin plays';
lyrics[24] = 'short';
lyrics[25] = 'quick';
lyrics[26] = 'melodies';
lyrics[27] = 'The body shivering in the cold';
lyrics[28] = 'Now the orchestra rises again';
lyrics[29] = 'Sudden blasts of wind!';
lyrics[30] = 'Listen for those dissonant harmonies';
lyrics[31] = 'The icy atmosphere';
lyrics[32] = 'This violin solo has different melodies and short intervals';
lyrics[33] = 'Bracing against the cold';
lyrics[34] = 'Can you hear those quick notes?';
lyrics[35] = 'They are chattering teeth';
lyrics[36] = 'Click-clicking together in this icy scene';
lyrics[37] = 'Chatter chatter';
lyrics[38] = 'Chatter chatter';
lyrics[39] = 'Chatter chatter';
lyrics[40] = 'Chatter chatter';
lyrics[41] = 'Chatter chatter';
lyrics[42] = 'The orchestra comes back together';
lyrics[43] = 'to replay that distinctive main theme';
lyrics[44] = "that brings this first movement of 'Winter' to a close";
lyrics[45] = 'after wintery images and moods like';
lyrics[46] = 'Cold!';
lyrics[47] = 'Ice,&nbsp';
lyrics[48] = 'shivering,';
lyrics[49] = 'agitation and';
lyrics[50] = 'crisp beauty.';
});
