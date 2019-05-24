

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

  questions.forEach((question, index) => {
    var card = createCard(question, index);
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

  //var form = $('<form>', { class: 'range-field w-25' });
  var input = $('<input>', {
    class: 'border-0',
    id: 'response' + index,
    type: 'range',
    min: '0',
    max: '5',
    step: '1'

  });

  //form.append(input);

  var thumbsup = $('<span>', { class: 'font-weight-bold blue-text ml-2 mt-1' }).append($('<i>', { class: 'fas fa-thumbs-up' }));

  cardtext.append(thumbsdown);
  cardtext.append(input);
  cardtext.append(thumbsup);

  cardbody.append(cardtitle);
  cardbody.append(cardtext);

  card.append(cardbody);

  return card;
}

function addPerson() {
  event.preventDefault();
  var responses = [];
  for (var i = 0; i < questions.length; i++) {
    responses.push($("#response" + i).val());
  }
  var newPerson = {
    name: $("#name").val().trim(),
    photo: $("#photoAddress").val().trim(),
    responses: responses
  };

  console.log(newPerson);

  $.post("/api/people", newPerson)
    .then(function (data) {
      console.log("Person Added: " + JSON.stringify(data));
      $.post("/api/findFriend", newPerson).then(function (friend) {
        console.log("Friend:" + JSON.stringify(friend));
        clearForm();
        $('#title').text("Your soul sibling is...");
        if (friend.name) {
          $('#friend-image').attr("src", friend.photo);
          $('#friend-name').text(friend.name);
        }else{
          $('#friend-name').text("No friends to show");
        }
        $('#card-friend').show();
      });
    });
}

function clearForm() {
  $('#input-name').hide();
  $('#input-photo').hide();
  $('#questionsDeck').empty();
  $("#name").hide();
  $("#photoAddress").hide();
  $("#add-btn").hide();
}