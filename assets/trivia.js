// JavaScript Document
$(document).ready(function () {
 

  var questions = [{
    question: "Sailing is an Olympic Sport. When was it first included in the Olympics?",
    choices: ['1896', '1900', '1904', '1908', '1912'],
    correctAnswer: 0,
    tidbit: "Sailing was introduced into the Olympics at the Games held in Athens, Greece in 1896. Although sailing was on the program for that year it could not take place because of weather concerns. Sailing was not included in the 1900 Olympics, but returned to the regular program in 1904.",
  }, {
    question: "Where would you put a baggy wrinkle on your yacht?",
    choices: ["Mainstay", "Shroud", "Mainsheet", "Tiller", "Backstay"],
    correctAnswer: 1,
    titbit: "Baggy wrinkles are used to prevent sail chafe and are usually attached to the main shrouds, port and starboard. They can be used on any shroud that may rub against a sail. They were traditionally made by sailors out of old lines cut to various lengths and attached to a central core to form a sleeve.",
  }, {
    question: "On 15 May 2010, who became the youngest person to complete a solo and unassisted around the world sailing trip?",
    choices: ['Jessica Watson', 'Jessica Waters', 'Jamie Waterson', 'Julie Winword', 'Jessica Winters'],
    correctAnswer: 0,
    tidbit: "Jessica was born on the Gold Coast in Queensland, Australia, so the sea was in her veins from an early age.",
  }, {
    question: " You're sailing a two masted boat with the mizzen mast located forward of the steering post. What type of boat are you on?",
    choices: ["Ketch", "Sloop", "Cutter", "Yawl", "Schooner"],
    correctAnswer: 0,
    tidbit: "The schooner has a fore mast which is shorter than the main mast. The ketch and the yawl both have a mizzen mast, aft of the main mast, but the mizzen mast on a yawl is located aft of the steering post. The easy way to remember which is which is that 'k' comes before 'y'. The sloop has only one mast.",
  }, {
    question: "Which of the following is NOT a turning maneuver term in sailing?",
    choices: ["Jibing", "Tacking", "Hull Trimming", "Sail Trimming", ],
    correctAnswer: 2,
    tidbit: "Jibing is turning the stern past the wind so the wind changes from one side to the other, allowing a turn. Tacking is changing the bow into the wind using the wind change from side to side to help the turn. Sail trimming is simply setting the angle of the vessel to the wind. Hull trimming however is adjusting the boat's load to work with its performance in the water.",
  }, {
    question: "Where would you use a pig stick on your yacht?",
    choices: ["Top of the mizzen mast", "Across the Backstay", "Down the beam", "Along the boom",
      "Top of the Main mast"
    ],
    correctAnswer: 4,
    tidbit: "The pig stick is used to fly your yacht club burgee. The pig stick is designed to be hoisted by a small halyard to the maintop so that the burgee flies above the mast and is free to rotate to show the direction of the apparent wind.",
  }, {
    question: "A vessel is not a yacht when:",
    choices: ["It is not registered at a port of a national maritime authority", "It has an outboard motor",
      "It has no accommodation below deck", "It has a retractable keel",
    ],
    correctAnswer: 3,
    tidbit: "It's a fine line between yacht and not, but the traditional divide is the keel. Yachts have fixed keels (and can generally sink). Sailing boats that have a retractable keel (and cannot usually sink) are called sailing dinghies. There are sailing dinghies larger than some small yachts.",
  }, {
    question: "What color flag must be flown when first entering the territorial waters of another Country?",
    choices: ["Yellow & white vertical stripes", "Yellow & white horizontal stripes",
      "Yellow & white diagonal stripes", "Solid yellow", "Solid White"
    ],
    correctAnswer: 3,
    tidbit: "The yellow flag is the international signal flag for, 'my vessel is healthy'. It is known as the 'Q' flag, and in effect invites Customs Officers to inspect your vessel. Once inspected, or after a specified period awaiting inspection, the Q flag can be lowered, and need not be raised again while inside the territorial waters of that country."
  }, {
    question: "The large buoys used to denote a safe channel or passage for vessels into and out of a harbour, are painted in which of the following colors?",
    choices: ['Blue and White', 'Black and Yellow', 'Red and White', 'Blue and Yellow', 'Red and Green'],
    correctAnswer: 4,
    tidbit: "When entering a harbour, these 'lateral marks' as they are known, must be kept green to starboard and red to port. On leaving harbour, the green buoys must be kept to port and the red to starboard. When navigating a channel, either leaving or entering a harbour, you must keep your vessel to your right hand side of the channel. Buoys that warn of danger, and many others, are standardised across the world. However, in the system in use in the United States, the lateral mark system is reversed; on leaving a harbour the green lateral buoys must be kept to starboard, the red to port and vice versa on entering a harbour. The opening of a safe channel may also be indicated by a pillar buoy painted with alternating red/white vertical stripes.",
  }, {
    question: "Shank, crown, stock, and fluke will all be found where?",
    choices: ['Transom', "Cockpit Controls", 'Chain Locker', 'Bowspirt', 'Rudder'],
    correctAnswer: 2,
    tidbit: "These are all parts of anchors, stored in the chain locker. There are several general types in common use. Examples are Danforth, CQR, patent, and admiralty.",
  }];

  //varialbes for question number, user selections and div where the info is shown
  var questionCounter = 0;
  var selections = [];
  var quiz = $('.content');





  // function to show the first/next question
  displayNext();

  //function for popup timers
  function questionTimer() {
    alert("time is up");
    $('#warning').text('Time is up');
    if (questionTimer < 1) {
      userChoice = 5
      questionCounter++;
      displayNext()
      //i cant figure out the logic if question timer = 0 then record a blank answer, then move on
      //maybe if timer = 0 userchoice = soemthing outside the array, ie 7

      

    }

  }
  setTimeout(questionTimer, 10000);


  //what happens when you click the next button?
  $('#next').on('click', function (e) {
    e.preventDefault();



    userChoice();

    // what happens if they click next without an answer?
    //if selection isnt an option, warn user 
    //if not get next ?
    if (isNaN(selections[questionCounter])) {
      $('#warning').text('You must select an answer to continue!');
    } else {
      questionCounter++;
      displayNext();
      setTimeout(questionTimer, 10000);

    }
  });

  // what happens when the previous button is clicked, go back 1 questoin
  $('#prev').on('click', function (e) {
    e.preventDefault();

    userChoice();
    questionCounter--;
    setTimeout(questionTimer, 10000);
    displayNext();
  });

  // start over button, reset user choices, reset buttons, display first question
  $('#start').on('click', function (e) {
    e.preventDefault();


    questionCounter = 0;
    selections = [];
    displayNext();
    setTimeout(questionTimer, 10000);
    $('#start').hide();
  });

  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    console.log(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    console.log(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    // this is new
    var warningText = $('<p id="warning">');
    qElement.append(warningText);
    console.log(warningText)
    console.log(qElement);

    return qElement;

  }

  // create and use radio buttons for choices
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // function to gather user choice as an answer
  function userChoice() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays new question
  function displayNext() {
    quiz.fadeOut(function () {
      $('#question').remove();

      if (questionCounter < questions.length) {
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
        }

        // if we are on the first question, hide the prev button, afterwards show it
        if (questionCounter === 1) {
          $('#prev').show();
        } else if (questionCounter === 0) {

          $('#prev').hide();
          $('#next').show();
        }
      } else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  // calculate the number correct vs questions length (10)

  function displayScore() {
    var score = $('<h3>', {
      id: 'question'
    });

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    ////display custom message depending on score
    var percentage = numCorrect / questions.length;
    if (percentage >= 0.9) {
      score.append('You are indeed a sailor, You got ' + numCorrect + ' out of ' +
        questions.length + ' questions right. I would sail with you anyday.');
    } else if (percentage >= 0.7) {
      score.append('You should spend another year as a first mate. You got ' + numCorrect + ' out of ' +
        questions.length + ' questions right.');
    } else if (percentage >= 0.5) {
      score.append('I wont be leaving the dock with you. You are not fit to sail. You got ' + numCorrect + ' out of ' +
        questions.length + ' questions right.');
    } else {
      score.append('You will most likely perrish at sea. ' + numCorrect + ' out of ' +
        questions.length + ' right.');
    }
    console.log(percentage);
    console.log(numCorrect);
    return score;

  }






});