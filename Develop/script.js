// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var containerEl = $('.container-fluid');
var timeBlockEl = $('.time-block');
var saveButtonEl = $('.saveBtn');
var descriptionTextEl = $('.description')

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  timeBlockEl.children('.saveBtn').on('click', function(){ // TODO right now the text is being saved into local storage, but isnt persisting when refreshing browser
    var text = $(this).siblings('.description').val();
    console.log(text);
    localStorage.setItem('text', text);
    var newText = localStorage.getItem('text');
    console.log(newText)
    console.log($(this).siblings('.description').val(newText));
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  today = dayjs();
  todayHours = dayjs().format('H');
  var headerContainer = $('header');
  var pEl = $('<p>');
  pEl.text(today);
  headerContainer.append(pEl);

  if (todayHours < 5){
    console.log('greater than 5')
  }else{
    console.log('less than 5')
  }
  console.log(todayHours)
  // this for loop adds the hour number into the hoursArray array
  for (i = 0; i < containerEl.children().length; i++){
    timeBlockIds = containerEl.children().eq(i).attr('id')
    timeBlockNumbers = timeBlockIds.replace('hour-', ''); // this gets rid of the "hour-" behind each id name
    // todayHours = 19;
    if (timeBlockNumbers < todayHours){
      containerEl.children().eq(i).addClass("past")
    }
    else if(timeBlockNumbers > todayHours){
      containerEl.children().eq(i).addClass("future")
    }
    else if(timeBlockNumbers == todayHours){
      containerEl.children().eq(i).addClass("present")
    }
    console.log(timeBlockNumbers) // prints the number of each element
  }




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

  // TODO: Add code to display the current date in the header of the page.
});
