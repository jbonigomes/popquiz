$('document').ready(function() {

  // Let's make the page refreshes re-usable
  function pickRandomQuestion() {
    var data = questions[Math.floor(Math.random() * (questions.length))];

    $('body').removeClass().addClass(data.color);
    $('#question').removeClass().addClass(data.color);

    $('#answers .container h3').html(data.question);
    $('#question .container h1').html(data.question);
  }

  pickRandomQuestion();

  // A couple of event listeners
  $('#question .refresh').on('click', 'i', function() {
    pickRandomQuestion();
  });

  $('#answers').on('click', '.container > div', function() {
    $('h3').removeClass();
    $(this).find('h3').addClass('active');
  });

  // The all page
  questions.forEach(function(question, i) {
    $('#allquestions .container').append('<h2>' + (i+1) + ') ' + question.question + '</h2>');

    question.subquestions.forEach(function(subquestion) {
      $('#allquestions .container').append('<h3>' + subquestion.question + '</h3>');
      $('#allquestions .container').append('<h4>' + subquestion.answer + '</h4>');
    });
  });

});
