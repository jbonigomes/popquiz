$('document').ready(function() {

  // Let's make the page refreshes re-usable
  function pickRandomQuestion() {
    var data = questions[Math.floor(Math.random() * (questions.length))];

    $('body').removeClass().addClass(data.color);
    $('#question').removeClass().addClass(data.color);

    $('#answers .container h2').html(data.answer);
    $('#question .container h1').html(data.question);

    $('h2').removeClass();
  }

  pickRandomQuestion();

  // A couple of event listeners
  $('#question .refresh').on('click', 'i', function() {
    pickRandomQuestion();
  });

  $('#question').on('click', 'h1', function() {
    $('h2').addClass('active');
  });

  // The all page
  questions.forEach(function(question, i) {
    $('#allquestions .container').append('<h2 class="active">' + (i+1) + ') ' + question.question + '</h2>');
    $('#allquestions .container').append('<h3>' + question.answer + '</h3>');
  });

});
