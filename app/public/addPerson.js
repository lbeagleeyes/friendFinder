

var questions = ["Do you like dogs?",
  "Are you a cat person?",
  "Are you constantly thinking about the future?",
  "Do you like to read?",
  "Do you like science fiction?",
  "Do you like kids?",
  "Is spirituality a part of your life?",
  "Do you enjoy going to concerts?",
  "Are you interested in learning new languages?",
  "Do you like going to the movies?",
  "How about going out for a walk?"];


$(document).ready(function () {
  //create cards with questionaire

  questions.forEach(question => {
    var card = createCard(question);
    $('#questionsDeck').append(card);
  });


});

function createCard(question, index) {
  var card = $('<div>', {
    class: 'card blue-grey lighten-5',
    id: 'question' + index,
  });


  var cardbody = $('<div>').addClass('card-body');
  var cardtitle = $('<h5>', {
    class: 'card-title indigo-text mt-4',
    text: question
  });
  var cardtext = $('<div>', {
    class: 'd-flex justify-content-left my-4 pt-3',
  });
  var thumbsdown = $('<span>', {
    class: 'font-weight-bold blue-text mr-2 mt-1',
  }).append($('<i>', { class: 'fas fa-thumbs-down' }));

  var form = $('<form>', { class: 'range-field w-25' });
  var input = $('<input>', {
    class: 'border-0',
    id: 'response' + index,
    type: 'range',
    min: '0',
    max: '5',
    step: '1'
  });

  form.append(input);

  var thumbsup = $('<span>', { class: 'font-weight-bold blue-text ml-2 mt-1' }).append($('<i>', { class: 'fas fa-thumbs-up' }));

  cardtext.append(thumbsdown);
  cardtext.append(form);
  cardtext.append(thumbsup);

  cardbody.append(cardtitle);
  cardbody.append(cardtext);

  card.append(cardbody);

  return card;
}

$("#add-btn").on("click", function (event) {
  event.preventDefault();
  var newPerson = {
    name: $("#name").val().trim(),
    photo: $("#photoAddress").val().trim(),
    response: [$("#res1").val().trim()]
  };

  console.log(newPerson);

  $.post("/api/people", newPerson)
    .then(function (data) {
     alert("Person Added");
    });
    clearForm();
});

function clearForm() {
  $("#name").val("");
  $("#photoAddress").val("");
}