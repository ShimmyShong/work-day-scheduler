
$(function () {
  var containerEl = $('.container-fluid');
  var timeBlockEl = $('.time-block');
  var text = '';
  var textId = '';

  timeBlockEl.children('.saveBtn').on('click', function(){
    text = $(this).siblings('.description').val();
    console.log(text);
    textId = $(this).parent().attr('id'); // this gets the html text id relative to the save button that was clicked on
    localStorage.setItem(textId, text);
  })

  timeBlockEl.each(function() { // the .each method selects all the time-block class elements and iterates through each of them
    var textId = $(this).attr('id');
    var savedText = localStorage.getItem(textId);
    $(this).children('.description').val(savedText);
  });

  today = dayjs().format('MMMM D, YYYY (dddd)');
  todayHours = parseInt(dayjs().format('H')); // parsing this to an integer because it caused problems with the if statements below
  var headerContainer = $('header');
  var pEl = $('<p>');
  pEl.addClass('lead')
  pEl.text(today);
  headerContainer.append(pEl);
  
  // this for loop adds the hour number into the hoursArray array
  for (i = 0; i < containerEl.children().length; i++){
    timeBlockIds = containerEl.children().eq(i).attr('id')
    timeBlockNumbers = parseInt(timeBlockIds.replace('hour-', '')); // this gets rid of the "hour-" behind each id name so that it can be properly used in an if condition
    if (timeBlockNumbers < todayHours){
      containerEl.children().eq(i).addClass("past")
    }
    else if(timeBlockNumbers > todayHours){
      containerEl.children().eq(i).addClass("future")
    }
    else if(timeBlockNumbers == todayHours){
      containerEl.children().eq(i).addClass("present")
    }
  }
});
